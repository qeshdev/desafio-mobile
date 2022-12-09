/**
 * The function checks if the email is valid with a regex
 * @param email to validate
 * @returns true if email is valid or false if email is invalid
 */
export const emailValidation = (email: string): boolean => {
  if (!email) return false
  const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
  return emailRegex.test(email)
}

/**
 * The function checks if the password is valid
 * @param password to validate
 * @returns true if password is valid or false if password is invalid
 * @example passwordValidation('12345') // true
 * @example passwordValidation('1234') // false
 */
export const passwordValidation = (password: string): boolean => {
  if (!password) return false
  return password.length >= 5
}
