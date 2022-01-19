import React from 'react'
import styles from './Home.module.scss'
import { Content, Tag } from '~/api/types'
import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListContent,
} from 'microcms-js-sdk'
import { Card } from '~/components/Card'

export type Props = {
  blog: (Content & { tags: (Tag & MicroCMSListContent)[] } & MicroCMSContentId &
    MicroCMSDate)[]
}

const Home: React.VFC<Props> = (props) => {
  const { blog } = props
  return (
    <main className={styles.main}>
      {blog.map((blog) => (
        <Card
          key={blog.id}
          title={blog.title}
          id={blog.id}
          date={blog.publishedAt}
          tags={blog.tags}
        />
      ))}
    </main>
  )
}

export default Home
