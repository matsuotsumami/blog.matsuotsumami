import type { NextApiRequest, NextApiResponse } from 'next'
import { Methods } from '~/api/blog/_id@string'
import { client } from '~/libs/client'

type PreviewType = Methods['get']['resBody']

const preview = async (
  req: NextApiRequest,
  res: NextApiResponse<PreviewType>
) => {
  if (!req.query.id) {
    return res.status(404).end()
  }

  const content = await client.blog
    ._id(req.query.id as string)
    .$get({ query: { draftKey: req.query.draftKey as string } })

  if (!content) {
    return res.status(401).end()
  }

  res.setPreviewData({
    id: content.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/posts/${content['id']}` })
  res.end('Preview mode enabled')
}

export default preview
