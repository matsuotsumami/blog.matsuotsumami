import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '~/libs/client'
import { Content } from '~/api/types'
import { MicroCMSDate } from 'microcms-js-sdk'
import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { Posts } from '~/components/Posts'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/snazzy.css'

type Props = {
  blog: Content & MicroCMSDate
  draftKey: string | null
}

const BlogPage: NextPage<Props> = (props) => {
  const { blog, draftKey } = props
  console.log(draftKey)
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <Layout>
        <Header draftKey={draftKey} />
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

type PreviewType = {
  id: string
  draftKey: string
}

type QueryType = {
  id: string
}

export const getStaticProps: GetStaticProps<Props, QueryType, PreviewType> =
  async (context) => {
    const id = context.params?.id
    const preview = context.previewData?.draftKey ?? null

    if (typeof id !== 'string') throw Error('id is not string.')

    let data = preview
      ? await client.blog._id(id).$get({ query: { draftKey: preview } })
      : await client.blog._id(id).$get()

    const $ = cheerio.load(data.body)
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    console.log($.html())

    data.body = $.html()

    return {
      props: {
        blog: data,
        draftKey: preview,
      },
    }
  }

export default BlogPage
