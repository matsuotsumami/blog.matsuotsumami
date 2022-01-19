import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Home as Main, Props as HomeType } from '~/components/Home'
import { Footer } from '~/components/Footer'

import { VFC } from 'react'

export type Props = HomeType

const LayoutHome: VFC<Props> = ({ blog }) => {
  return (
    <Layout>
      <Header />
      <Main blog={blog} />
      <Footer />
    </Layout>
  )
}

export default LayoutHome
