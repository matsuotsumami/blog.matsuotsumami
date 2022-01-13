import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { client } from '~/libs/client'
import { Content } from '~/api/types'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'

type Props = {
  blog: (Content & MicroCMSContentId & MicroCMSDate)[]
}

const Home: NextPage<Props> = (props) => {
  const { blog } = props
  console.log(blog)
  return (
    <>
      <Head>
        <title>おつまみ</title>
      </Head>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
