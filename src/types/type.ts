import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'
import { Content } from '~/api/types'

export type HomeType = {
  blog: (Content & MicroCMSContentId & MicroCMSDate)[]
}
