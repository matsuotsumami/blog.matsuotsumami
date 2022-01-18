import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '~/libs/client'
import { Header } from '~/components/Header'
import { Home as Main, Props } from '~/components/Home'
import { Footer } from '~/components/Footer'
import { Layout } from '~/components/Layout'

const Home: NextPage<Props> = (props) => {
  const { blog } = props
  console.log(blog)
  return (
    <Layout>
      <Head>
        <title>otsumami blog</title>
      </Head>
      <Header />
      <Main blog={props.blog} />
      <Footer />
    </Layout>
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
