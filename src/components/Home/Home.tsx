import React from 'react'
import Link from 'next/link'
import styles from './Home.module.scss'
import { pagesPath } from '~/utils/$path'
import { Content } from '~/api/types'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'

export type Props = {
  blog: (Content & MicroCMSContentId & MicroCMSDate)[]
}

const Home: React.VFC<Props> = (props) => {
  const { blog } = props
  return (
    <main className={styles.main}>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={pagesPath.posts._id(blog.id).$url()}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
