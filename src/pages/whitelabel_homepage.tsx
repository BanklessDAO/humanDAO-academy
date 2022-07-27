import {
  Box,
  Text,
  Heading,
  Button,
  Container,
  SimpleGrid,
  Image,
  useMediaQuery,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import Footer from 'layout/Footer'
import LessonBanner from 'components/LessonBanner'
import { HOMEPAGE_BACKGROUND, IS_WHITELABEL } from 'constants/index'
import MODULES from 'constants/whitelabel_modules'

const StyledImage = styled(Image)`
  width: 100%;
  max-height: 85vh;
  object-fit: cover;
`

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  return (
    <>
      <StyledImage src={HOMEPAGE_BACKGROUND} />
      <Box bgColor="#1F2023" p="4" overflow="hidden">
        <Container maxW="container.lg">
          <Box mt="16">
            <Heading as="h2" size="xl">
              Available Modules
            </Heading>
            <Box>
              {MODULES.map((module, key) => {
                const ModuleImage = (
                  <LessonBanner
                    iswhitelabel={IS_WHITELABEL}
                    cursor="pointer"
                    style={{
                      aspectRatio: '1.91/1',
                    }}
                    maxW="600px"
                  >
                    <NextLink href={`/lessons?module=${module.slug}`}>
                      <Image src={module.moduleImageLink} />
                    </NextLink>
                  </LessonBanner>
                )
                const ModuleDescription = (
                  <Box alignSelf="center" mt="4">
                    <Heading fontSize="2xl">{module.name}</Heading>
                    <Text fontSize="lg" my="4">
                      {module.description}
                    </Text>
                    <NextLink href={`/lessons?module=${module.slug}`}>
                      <Button variant="primary" mt="4">
                        Explore Module
                      </Button>
                    </NextLink>
                  </Box>
                )
                return (
                  <LessonGrid
                    columns={{ sm: 1, md: 2, lg: 2 }}
                    key={key}
                    gap={6}
                    py="10"
                    mx={isSmallScreen ? '0' : '12'}
                  >
                    {key % 2 === 0 || isSmallScreen ? (
                      <>
                        {ModuleImage}
                        {ModuleDescription}
                      </>
                    ) : (
                      <>
                        {ModuleDescription}
                        {ModuleImage}
                      </>
                    )}
                  </LessonGrid>
                )
              })}
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default HomePage
