export interface AuthenticationUserResponse {
  refresh_token: string
  access_token: string
}

export interface CreateUserParams {
  email: string
  password: string
}
