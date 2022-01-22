import { MicroCMSDate } from 'microcms-js-sdk'
import { VFC } from 'react'
import { Content } from '~/api/types'
import styles from './Posts.module.scss'

type Props = {
  blog: Content & MicroCMSDate
}

const Posts: VFC<Props> = ({ blog }) => {
  return (
    <main className={styles.main}>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <article
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  )
}

export default Posts
