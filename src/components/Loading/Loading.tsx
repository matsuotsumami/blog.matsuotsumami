import { VFC } from 'react'
import { TailSpin } from 'react-loader-spinner'
import styles from './Loading.module.scss'

const Loading: VFC = () => {
  return (
    <main className={styles.main}>
      <TailSpin width={100} height={100} color='gray' ariaLabel='loading' />
    </main>
  )
}

export default Loading
