import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client, pageApi } from '~/libs/client'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Home as Main } from '~/components/Home'
import { Footer } from '~/components/Footer'
import { HomeType } from '~/types/type'

type Props = HomeType

const Home: NextPage<Props> = (props) => {
  const { blog } = props
  console.log(blog)
  console.log(process.env.NODE_ENV)
  return (
    <>
      <Head>
        <title>おつまみのブログ</title>
      </Head>
      <Layout>
        <Header />
        <Main blog={blog} />
        <Footer />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.blog.$get()

  const search = await pageApi.api.search.$get({ query: { q: '追加' } })

  console.log('search')

  console.log(search)

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Home
