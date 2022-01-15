import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '~/libs/client'
import { Content } from '~/api/types'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'
import { Header } from '~/components/Header'
import { Home as Main } from '~/components/Home'

type Props = {
  blog: (Content & MicroCMSContentId & MicroCMSDate)[]
}

const Home: NextPage<Props> = (props) => {
  const { blog } = props
  console.log(blog)
  return (
    <>
      <Head>
        <title>otsumami blog</title>
      </Head>
      <Header />
      <Main blog={props.blog} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.blog.$get()

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Home
