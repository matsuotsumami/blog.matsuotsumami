import { useRouter } from 'next/router'
import { VFC, KeyboardEvent, useState, ChangeEvent } from 'react'
import { pagesPath } from '~/utils/$path'
import styles from './SearchInput.module.scss'

const SearchInput: VFC = () => {
  const router = useRouter()

  const value = (router.query.q as string | undefined) ?? ''

  const [text, setText] = useState(value)

  const searchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (!value || !value.match(/\S/g)) return
    if (e.key === 'Enter') {
      router.push(pagesPath.search.$url({ query: { q: value } }))
    }
  }

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <input
      className={styles.searchInput}
      type='search'
      placeholder='🔍'
      value={text}
      onChange={(e) => onTextChange(e)}
      onKeyPress={(e) => searchEnter(e)}
    />
  )
}

export default SearchInput
