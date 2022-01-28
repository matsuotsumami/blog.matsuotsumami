import Link from 'next/link'
import React from 'react'
import { pagesPath } from '~/utils/$path'
import styles from './Header.module.scss'

type Props = {
  draftKey?: string | null
}

const Header: React.VFC<Props> = ({ draftKey }) => {
  return (
    <header className={styles.header}>
      <Link href={pagesPath.$url()} passHref>
        <h1>
          <a>otsumami blog</a>
        </h1>
      </Link>
      {draftKey && <p>プレビューモード</p>}
    </header>
  )
}

export default Header
