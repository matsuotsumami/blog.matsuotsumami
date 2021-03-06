import api from '@/api/$api'
import aspida from '@aspida/fetch'

const serviceDomain = process.env.SERVICE_DOMAIN
const apiKey = process.env.API_KEY as string

const fetchConfig = {
  headers: {
    'X-MICROCMS-API-KEY': apiKey,
  },
  baseURL: `https://${serviceDomain}.microcms.io/api/v1`,
}

export const client = api(aspida(fetch, fetchConfig))

const pageApiBaseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://blog.otsumami.dev'

const pageFetchConfig = {
  baseURL: pageApiBaseURL,
}

export const pageApi = api(aspida(fetch, pageFetchConfig))
