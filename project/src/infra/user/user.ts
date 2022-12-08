import { BodyParams, getUserResponse, UserResponse, UserUpdate } from '@/domain/protocols/user'

import { client } from '../client'

/**
 *  This endpoint returns an user
 * @param email email for login
 * @returns user infos or error
 */
const getUser = async (email: string): Promise<getUserResponse | Error> => {
  try {
    const response = await client.get(`/user/getuser?email=${email}`)
    const { data } = response
    return data
  } catch (err) {
    return new Error('Error on get user')
  }
}

/**
 * This endpoint returns a User
 * @param email email for login
 * @returns user infos or error
 * */
const user = async (email: string): Promise<UserResponse | Error> => {
  try {
    const response = await client.get(`/user?email=${email}`)
    const { data } = response
    return data
  } catch (err) {
    return new Error('Error on get user')
  }
}

/**
 * This endpoint, is used to change the avatar image with access_token
 * @param token access_token
 * @param body photo
 * @returns user infos or error
 */
const updatePhoto = async (token: string, body: BodyParams): Promise<getUserResponse | Error> => {
  try {
    const response = await client.put(`/user/updatephoto`, {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
      body
    })
    const { data } = response
    return data
  } catch (err) {
    return new Error('Error on update photo')
  }
}
/**
 * This End-Point, is used to change the avatar image and the user data.
 * all the data should be sent even if it will not be changed. If so, there will be missing data
 * @param token access_token
 * @param body user data
 * @returns user infos or error
 */
const updateUser = async (token: string, body: UserUpdate): Promise<getUserResponse | Error> => {
  try {
    const response = await client.put(`/user/update`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      body
    })
    const { data } = response
    return data
  } catch (err) {
    return new Error('Error on update user')
  }
}

export { getUser, user, updatePhoto, updateUser }
