import React from 'react'
import { GetStaticProps } from 'next'

import { PageMetaProps } from 'components/Head'

const pageMeta: PageMetaProps = {
  title: 'Home',
  description: '...',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

export default Page
