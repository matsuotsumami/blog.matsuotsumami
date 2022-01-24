import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '~/libs/client'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Home as Main } from '~/components/Home'
import { Footer } from '~/components/Footer'
import { HomeType } from '~/types/type'
import { Side } from '~/components/Side'

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
        <Side />
        <Footer />
      </Layout>
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
