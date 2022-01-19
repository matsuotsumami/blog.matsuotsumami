import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '~/libs/client'
import { HomeType } from '~/types/type'
import Head from 'next/head'
import LayoutHome from '~/components/LayoutHome'

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
      <LayoutHome blog={blog} />
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
