import type { NextApiRequest, NextApiResponse } from 'next'

const exit = (_req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()

  res.writeHead(307, { Location: '/' })
  res.end()
}

export default exit
