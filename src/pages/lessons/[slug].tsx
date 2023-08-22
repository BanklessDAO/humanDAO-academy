/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'
import fs from 'fs'

import { MetaData } from 'components/Head'
import LessonDetail from 'components/LessonDetail'
import Article from 'components/Article'
import { DEFAULT_METADATA, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import { useEffect } from 'react'
import { markdown } from 'utils/markdown'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = LESSONS.find(
    (lesson: LessonType) => lesson.slug === params.slug
  )
  const translations = {}
  // console.log(currentLesson.languages)
  for (const language of currentLesson.languages) {
    // console.log(language)
    try {
      translations[language] = await fs.readFileSync(
        `public/lesson/${language}/${currentLesson.slug}.md`,
        'utf8'
      )
    } catch (error) {
      currentLesson.languages = currentLesson.languages.filter(
        (l) => l !== language
      )
      console.log('error loading language', language)
    }
  }
  const pageMeta: MetaData = {
    title: currentLesson.name,
    description: currentLesson.description,
    image: currentLesson.socialImageLink || DEFAULT_METADATA.image,
    isLesson: !currentLesson.isArticle,
    translations: translations,
  }
  return {
    props: { pageMeta },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: LESSONS.map((lesson) => ({ params: { slug: lesson.slug } })),
    fallback: true,
  }
}

// TODO: move to /lesson/lesson-name + add redirect
let translations = []

const LessonPage = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  const { asPath } = useRouter()
  const router = useRouter()
  const [path] = asPath.split('?')
  const [isSmallScreen] = useSmallScreen()
  const { lang } = router.query

  const lessons = JSON.parse(JSON.stringify(LESSONS))

  const currentLesson = lessons.find(
    (lesson: LessonType) => `/lessons/${lesson.slug}` === path
  )

  const translationFiles = Object.keys(pageMeta.translations)
  for (const language of currentLesson.languages) {
    if (!translationFiles.includes(language)) {
      // console.log('no lang')
      currentLesson.languages = currentLesson.languages.filter(
        (l) => l !== language
      )
    }
  }

  const loadMD = async (md, lang) => {
    console.log('loadMD')
    // console.log('md', md)
    if (md[0] !== '<') {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const [intro, content] = md?.split(SPLIT)
      // console.log(intro)
      const [, infos] = (intro || '').split('---')
      // console.log(infos)
      const [, title] = (infos || '').split('\n')
      // console.log(title)
      currentLesson.name = title.replace('LESSON TITLE: ', '')
      currentLesson.description =
        'Aprende sobre la arquitectura fundamental de la tecnología de cadena de bloques (blockchain).'
      // console.log(content)
      const slides = content?.split('# ')
      slides.shift()
      // console.log(slides)
      for (let i = 0; i < currentLesson.slides.length - 1; i++) {
        // console.log(i)
        const [slide_title, slide_content, quizzes] = (slides[i] || '').split(
          '\n\n',
          3
        )
        // console.log(slide_title)
        // console.log(slide_content)
        // console.log(quizzes)
        currentLesson.slides[i].title = slide_title
        if (currentLesson.slides[i].type === 'LEARN' && slide_content) {
          const rendered = await markdown.render(slide_content)
          currentLesson.slides[i].content = currentLesson.slides[
            i
          ].content.replace(
            /<div class="bloc1">.*?<\/div>/s,
            `<div class="bloc1">${rendered}</div>`
          )
        }
        if (currentLesson.slides[i].type === 'QUIZ' && quizzes) {
          currentLesson.slides[i].quiz.question = slide_content
          quizzes.split('\n').map((quiz, j) => {
            const q = quiz.replace('- [ ] ', '').trim()
            if (q.length) currentLesson.slides[i].quiz.answers[j] = q
          })
        }
      }
      console.log(`save ${lang}`)
      translations[lang] = JSON.parse(JSON.stringify(currentLesson))
    }
  }

  const SPLIT = `\`\`\`
<< LESSON START >>
\`\`\``

  useEffect((): void => {
    if (!translations['en']?.name) {
      console.log('save en')
      translations['en'] = JSON.parse(JSON.stringify(currentLesson))
    }
    if (
      lang?.length &&
      typeof lang === 'string' &&
      lang in pageMeta.translations
    ) {
      if (currentLesson.languages.includes(lang as any)) {
        if (
          translations[lang]?.name &&
          translations[lang]?.name !== currentLesson.name
        ) {
          console.log(lang)
          currentLesson.name = translations[lang].name
          currentLesson.description = translations[lang].description
          currentLesson.slides = JSON.parse(
            JSON.stringify(translations[lang].slides)
          )
        } else {
          try {
            const md = pageMeta?.translations[lang]
            if (md) loadMD(md, lang)
          } catch (error) {
            console.error(error)
          }
        }
      } else {
        console.log('language unknown')
      }
    } else {
      if (
        translations['en']?.name &&
        translations['en']?.name !== currentLesson.name
      ) {
        console.log('en')
        currentLesson.name = translations['en'].name
        currentLesson.description = translations['en'].description
        currentLesson.slides = JSON.parse(
          JSON.stringify(translations['en'].slides)
        )
      }
    }
  }, [lang])

  useEffect(() => {
    translations = []
  }, [])

  if (!currentLesson) {
    // force redirect to lesson select if lesson is not found
    document.location.href = '/lessons'
    return null
  } else
    return (
      <>
        {currentLesson.isArticle ? (
          <Article lesson={currentLesson} />
        ) : (
          <Container maxW="container.xl" px={isSmallScreen ? '8px' : '16px'}>
            <LessonDetail lesson={currentLesson} />
          </Container>
        )}
      </>
    )
}

export default LessonPage
