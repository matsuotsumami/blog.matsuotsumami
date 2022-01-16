import { VFC } from 'react'
import styles from './Footer.module.scss'

const Footer: VFC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2022 otsuimami</p>
    </footer>
  )
}

export default Footer
