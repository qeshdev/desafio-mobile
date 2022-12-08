import { faker } from '@faker-js/faker'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { userResponse } from './test/mock'

describe('Auth', () => {
  let mock: MockAdapter

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('#authenticationUser', () => {
    const body = {
      email: faker.internet.email(),
      password: faker.internet.password()
    }

    it('should return user response when success', async () => {
      mock.onPost('/auth/login').reply(200, {
        userResponse
      })

      const { authenticateUser } = await import('./authentication-remote')
      const response = await authenticateUser(body)

      expect(response).toEqual({ userResponse })
    })

    it('should return error when fail', async () => {
      mock.onPost('/auth/login').reply(500, {
        error: 'Error on authenticate user'
      })

      const { authenticateUser } = await import('./authentication-remote')
      const response = await authenticateUser(body)

      expect(response).toEqual(new Error('Error on authenticate user'))
    })
  })

  describe('#logout', () => {
    const token = faker.datatype.uuid()

    it('should return true when success', async () => {
      mock.onPost('/auth/logout').reply(200, {
        success: true
      })

      const { logout } = await import('./authentication-remote')
      const response = await logout(token)

      expect(response).toEqual(true)
    })

    it('should return error when fail', async () => {
      mock.onGet('/auth/logout').reply(500, {
        error: 'Error on logout'
      })

      const { logout } = await import('./authentication-remote')
      const response = await logout(token)

      expect(response).toEqual(new Error('Error on logout'))
    })
  })

  describe('#refreshToken', () => {
    it('should return user response when success', async () => {
      mock.onGet('/auth/refresh').reply(200, {
        userResponse
      })

      const { refreshToken } = await import('./authentication-remote')
      const response = await refreshToken()

      expect(response).toEqual({ userResponse })
    })

    it('should return error when fail', async () => {
      mock.onGet('/auth/refresh').reply(500, {
        error: 'Error on refresh token'
      })

      const { refreshToken } = await import('./authentication-remote')
      const response = await refreshToken()

      expect(response).toEqual(new Error('Error on refresh token'))
    })
  })
})
