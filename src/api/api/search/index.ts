import { MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'
import { Content, Tag } from '../../types'

export type Methods = {
  get: {
    query: { q: string }
    resBody: MicroCMSListResponse<
      Content & { tags: (Tag & MicroCMSListContent)[] }
    >
  }
}
