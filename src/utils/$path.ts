/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  posts: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  tag: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/tag/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
