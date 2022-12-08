import axios, { AxiosInstance } from 'axios'

import { AuthenticationUserResponse, CreateUserParams } from '../../domain/protocols/auth'

const client: AxiosInstance = axios.create({
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

/** Authenticate user with email and password
 * @param params - User credentials
 * @returns Authentication response or error
 */
const authenticateUser = async (params: CreateUserParams): Promise<AuthenticationUserResponse | Error> => {
  try {
    const body: CreateUserParams = {
      email: params.email.trim(),
      password: params.password.trim()
    }

    const response = await client.post('/auth/login', body)
    const { data } = response
    return data
  } catch (err) {
    return new Error('Error on authenticate user')
  }
}

/** Logout user with token
 * @param token - User token
 * @returns Logout response or error string
 */
const logout = async (token: string): Promise<boolean | Error> => {
  try {
    await client.post('/auth/logout', token)
    return true
  } catch (err) {
    return new Error('Error on logout')
  }
}

/** Refresh user token
 * @returns A new token for user or error
 */
const refreshToken = async (): Promise<AuthenticationUserResponse | Error> => {
  try {
    const response = await client.get('/auth/refresh')
    const { data } = response
    return data
  } catch (err) {
    return new Error('Error on refresh token')
  }
}

export { authenticateUser, logout, refreshToken }
