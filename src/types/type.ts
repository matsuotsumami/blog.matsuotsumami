import { MicroCMSListContent } from 'microcms-js-sdk'
import { Content, Tag } from '~/api/types'

export type HomeType = {
  blog: (Content & {
    tags: (Tag & MicroCMSListContent)[]
  } & MicroCMSListContent)[]
}
