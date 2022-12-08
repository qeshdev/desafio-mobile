import { faker } from '@faker-js/faker'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { userResponse } from './test/mock'

describe('User', () => {
  let mock: MockAdapter

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('#getUser', () => {
    const email = faker.internet.email()
    it('should returns user response when success', async () => {
      mock.onGet(`/user/getuser?email=${email}`).reply(200, {
        userResponse
      })

      const { getUser } = await import('./user')
      const response = await getUser(email)

      expect(response).toEqual({ userResponse })
    })

    it('should returns error when fails', async () => {
      mock.onGet(`/user/getuser?email=${email}`).reply(500)

      const { getUser } = await import('./user')
      const response = await getUser(email)

      expect(response).toEqual(new Error('Error on get user'))
    })
  })

  describe('#user', () => {
    const email = faker.internet.email()
    it('should returns user response when success', async () => {
      mock.onGet(`/user?email=${email}`).reply(200, {
        userResponse
      })

      const { user } = await import('./user')
      const response = await user(email)

      expect(response).toEqual({ userResponse })
    })

    it('should returns error when fails', async () => {
      mock.onGet(`/user?email=${email}`).reply(500)

      const { user } = await import('./user')
      const response = await user(email)

      expect(response).toEqual(new Error('Error on get user'))
    })
  })

  describe('#updatePhoto', () => {
    const token = faker.datatype.uuid()
    const body = {
      photo: 'photo'
    }
    it('should returns user response when success', async () => {
      mock.onPut(`/user/updatephoto`).reply(200, {
        userResponse
      })

      const { updatePhoto } = await import('./user')
      const response = await updatePhoto(token, body)

      expect(response).toEqual({ userResponse })
    })

    it('should returns error when fails', async () => {
      mock.onPut(`/user/updatephoto`).reply(500)

      const { updatePhoto } = await import('./user')
      const response = await updatePhoto(token, body)

      expect(response).toEqual(new Error('Error on update photo'))
    })
  })

  describe('#updateUser', () => {
    const token = faker.datatype.uuid()
    const body = {
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      color: faker.internet.color(),
      nationality: faker.address.country()
    }
    it('should returns user response when success', async () => {
      mock.onPut(`/user/update`).reply(200, {
        userResponse
      })

      const { updateUser } = await import('./user')
      const response = await updateUser(token, body)

      expect(response).toEqual({ userResponse })
    })

    it('should returns error when fails', async () => {
      mock.onPut(`/user/update`).reply(500)

      const { updateUser } = await import('./user')
      const response = await updateUser(token, body)

      expect(response).toEqual(new Error('Error on update user'))
    })
  })
})
