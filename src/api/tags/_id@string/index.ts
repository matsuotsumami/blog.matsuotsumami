import { MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk'
import { Tag } from '~/api/types'

export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, 'draftKey' | 'fields' | 'depth'>
    resBody: Tag & MicroCMSListContent
  }
}
