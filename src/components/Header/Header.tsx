import React from 'react'
import styles from './Header.module.scss'

const Header: React.VFC = () => {
  return (
    <header className={styles.header}>
      <h1>otsumami blog</h1>
    </header>
  )
}

export default Header
