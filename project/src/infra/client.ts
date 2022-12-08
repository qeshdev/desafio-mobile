import axios, { AxiosInstance } from 'axios'

export const client: AxiosInstance = axios.create({
  baseURL: 'https://desafio.pw1.develop.us-east-1.qesh.ai',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Expose-Headers': 'Authorization'
  },
  timeout: 10000
})
