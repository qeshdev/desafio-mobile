import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #ffff;
  width: 100%;
`

interface HeaderProps {
  colorUser: string
}
export const Header = styled.View<HeaderProps>`
  background-color: ${({ colorUser }) => colorUser};
  height: 200px;
`

export const UserImageContainer = styled.View`
  align-self: center;
  background-color: #fff;
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  top: 130px;
`

export const UserImage = styled.Image`
  border-radius: 100px;
  height: 120px;
  width: 120px;
`

export const EmailContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  width: 100%;
`

export const PasswordContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: 100%;
`

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`
