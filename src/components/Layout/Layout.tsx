import { ReactNode, VFC } from 'react'
import styles from './Layout.module.scss'

export type Props = {
  children: ReactNode
}

const Layout: VFC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
