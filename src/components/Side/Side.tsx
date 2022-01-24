import { VFC } from 'react'
import styles from './Side.module.scss'
import { SearchInput } from '../SearchInput'

const Side: VFC = () => {
  return (
    <aside className={styles.side}>
      <SearchInput />
    </aside>
  )
}

export default Side
