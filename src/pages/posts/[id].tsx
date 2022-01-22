import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '~/libs/client'
import { Content } from '~/api/types'
import { MicroCMSDate } from 'microcms-js-sdk'
import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { Posts } from '~/components/Posts'

type Props = {
  blog: Content & MicroCMSDate
}

const BlogPage: NextPage<Props> = (props) => {
  const { blog } = props
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <Layout>
        <Header />
        <Posts blog={blog} />
        <Footer />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.blog.$get()

  const paths = data.contents.map((content) => `/posts/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id

  if (typeof id !== 'string') throw Error('id is not string.')

  const data = await client.blog._id(id).$get()

  return {
    props: {
      blog: data,
    },
  }
}

export default BlogPage
