import {
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from 'microcms-js-sdk'
import { Content, Tag } from '../types'

export type Methods = {
  get: {
    query?: MicroCMSQueries
    resBody: MicroCMSListResponse<
      Content & { tags: (Tag & MicroCMSListContent)[] }
    >
  }
}
