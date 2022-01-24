import React from 'react'
import styles from './Home.module.scss'
import { Content, Tag } from '~/api/types'
import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListContent,
} from 'microcms-js-sdk'
import { Card } from '~/components/Card'
import { AiFillTag } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { SearchInput } from '../SearchInput'

export type Props = {
  blog: (Content & { tags: (Tag & MicroCMSListContent)[] } & MicroCMSContentId &
    MicroCMSDate)[]
  tagName?: string
}

const Home: React.VFC<Props> = (props) => {
  const { blog, tagName } = props
  const router = useRouter()

  const searchText = router.query.q as string | undefined

  return (
    <main className={styles.main}>
      {searchText && <SearchInput />}
      {tagName !== undefined && (
        <div className={styles.tag}>
          <AiFillTag size={50} />
          <h1>{tagName}</h1>
        </div>
      )}
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
