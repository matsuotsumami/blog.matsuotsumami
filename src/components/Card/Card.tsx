// import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'
import { MicroCMSListContent } from 'microcms-js-sdk'
import Link from 'next/link'
import React, { VFC } from 'react'
import { Tag } from '~/api/types'
// import { Content } from '~/api/types'
import { pagesPath } from '~/utils/$path'
import styles from './Card.module.scss'

// TODO あとでリファクタ
export type Props = {
  title: string
  id: string
  date: string
  tags: (Tag & MicroCMSListContent)[]
}

const card: VFC<Props> = ({ title, id, date, tags }) => {
  const localDate = new Date(date).toLocaleDateString()

  return (
    <article className={styles.card}>
      <p>{localDate}</p>
      <h2 className={styles.title}>
        <Link href={pagesPath.posts._id(id).$url()}>
          <a>{title}</a>
        </Link>
      </h2>
      <div className={styles.tags}>
        <p>tag</p>
        <ul>
          {tags.map((tag) => (
            <li key={tag.name}>
              <Link href={pagesPath.tag._id(tag.id).$url()}>
                <a>{tag.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default card
