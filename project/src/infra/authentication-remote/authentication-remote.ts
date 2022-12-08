import { AuthenticationUserResponse, CreateUserParams } from '../../domain/protocols/auth'
import { client } from '../client'

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
