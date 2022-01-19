import Link from 'next/link'
import React from 'react'
import { pagesPath } from '~/utils/$path'
import styles from './Header.module.scss'

const Header: React.VFC = () => {
  return (
    <header className={styles.header}>
      <Link href={pagesPath.$url()} passHref>
        <h1>
          <a>otsumami blog</a>
        </h1>
      </Link>
    </header>
  )
}

export default Header
