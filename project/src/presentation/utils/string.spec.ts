import { faker } from '@faker-js/faker'

import { emailValidation, passwordValidation } from './string'

describe('presentation/utils/string', () => {
  test('#emailValidation works correctly', () => {
    expect(emailValidation('')).toBeFalsy()
    expect(emailValidation('invalid_email')).toBeFalsy()
    expect(emailValidation(faker.internet.email())).toBeTruthy()
  })

  test('#passwordValidation works correctly', () => {
    expect(passwordValidation('')).toBeFalsy()
    expect(passwordValidation('1234')).toBeFalsy()
    expect(passwordValidation('12345')).toBeTruthy()
  })
})
