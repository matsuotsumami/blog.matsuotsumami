import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '~/libs/client'
import { Content } from '~/api/types'
import { MicroCMSDate } from 'microcms-js-sdk'
import Head from 'next/head'

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
      <main>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <article
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.blog.$get()

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string

  const data = await client.blog._id(id).$get()

  return {
    props: {
      blog: data,
    },
  }
}

export default BlogPage
