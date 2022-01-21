import type { NextApiRequest, NextApiResponse } from 'next'
import { Methods } from '~/api/blog'
import { client } from '~/libs/client'

type ApiType = Methods['get']['resBody']

const search = async (req: NextApiRequest, res: NextApiResponse<ApiType>) => {
  const query = req.query.q
  if (typeof query !== 'string') {
    res.status(400).end()
    return
  }

  const content = await client.blog.$get({ query: { q: query } })

  res.status(200).json(content)
}

export default search
