import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { pageApi } from '~/libs/client'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Home as Main } from '~/components/Home'
import { Footer } from '~/components/Footer'
// import { HomeType } from '~/types/type'
import useAspidaSWR from '@aspida/swr'
import { useRouter } from 'next/dist/client/router'
import { Loading } from '~/components/Loading'

export type Query = {
  q: string
}

const SearchPage: NextPage = () => {
  const route = useRouter()
  const searchQuery = route.query.q as string

  const { data, error } = useAspidaSWR(pageApi.api.search, {
    query: { q: searchQuery },
  })

  if (error) return <p>error</p>

  console.log(process.env.NODE_ENV)
  return (
    <>
      <Head>
        <title>おつまみのブログ</title>
      </Head>
      <Layout>
        <Header />
        {data ? <Main blog={data?.contents} /> : <Loading />}
        <Footer />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default SearchPage
