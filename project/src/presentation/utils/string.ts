export const emailValidation = (email: string): boolean => {
  if (!email) return false
  const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
  return emailRegex.test(email)
}
