import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from 'utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }
    res.status(200).json(sampleUserData)
  } catch (e) {
    res.status(500).json({ statusCode: 500, ...e })
  }
}

export default handler
