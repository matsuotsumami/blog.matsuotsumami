import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '~/libs/client'
import { HomeType } from '~/types/type'
import Head from 'next/head'
import { Home as Main } from '~/components/Home'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'

type Props = HomeType & {
  tag: string
}

const TagPage: NextPage<Props> = (props) => {
  const { blog, tag } = props
  return (
    <>
      <Head>
        <title>{tag}</title>
      </Head>
      <Layout>
        <Header />
        <Main blog={blog} />
        <Footer />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.tags.$get()

  const paths = data.contents.map((content) => `/tag/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id

  if (typeof id !== 'string') throw Error('id is not string.')

  const data = await client.blog.$get({
    query: { filters: `tags[contains]${id}` },
  })

  const tag = await client.tags._id(id).$get()

  return {
    props: {
      blog: data.contents,
      tag: tag.name,
    },
  }
}
export default TagPage
