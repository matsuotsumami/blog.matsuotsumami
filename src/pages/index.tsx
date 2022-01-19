import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '~/libs/client'
import LayoutHome from '~/components/LayoutHome'
import { HomeType } from '~/types/type'

type Props = HomeType

const Home: NextPage<Props> = (props) => {
  const { blog } = props
  console.log(blog)
  return (
    <>
      <Head>
        <title>おつまみのブログ</title>
      </Head>
      <LayoutHome blog={blog} />
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
