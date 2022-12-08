import { faker } from '@faker-js/faker'

import { emailValidation } from './string'

describe('presentation/utils/string', () => {
  test('#emailValidation works correctly', () => {
    expect(emailValidation('')).toBeFalsy()
    expect(emailValidation('invalid_email')).toBeFalsy()
    expect(emailValidation(faker.internet.email())).toBeTruthy()
  })
})
