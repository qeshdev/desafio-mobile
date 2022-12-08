export interface getUserResponse {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  name: string
  phone: string
  color: string
  photo: string
  token: string
  nationality: string
  refresh_token: string
}

export interface UserResponse {
  color: string
  photo: string
}

export interface BodyParams {
  photo: string
}

export interface UserUpdate {
  name: string
  phone: string
  color: string
  nationality: string
}
