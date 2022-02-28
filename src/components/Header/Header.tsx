import Link from 'next/link'
import React from 'react'
import { pagesPath } from '~/utils/$path'
import styles from './Header.module.scss'
import { AiFillGithub } from 'react-icons/ai'

type Props = {
  draftKey?: string | null
}

const Header: React.VFC<Props> = ({ draftKey }) => {
  return (
    <header className={styles.header}>
      <Link href={pagesPath.$url()} passHref>
        <a>
          <h1>otsumami blog</h1>
        </a>
      </Link>
      {draftKey && (
        <Link href='/api/exitpreview'>
          <a>プレビューモード</a>
        </Link>
      )}
      <nav>
        <Link href='https://github.com/matsuotsumami'>
          <a target='_blank' aria-label='matsuotsumami github'>
            <AiFillGithub size={30} />
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
