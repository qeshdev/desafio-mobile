import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #ffff;
  width: 100%;
  height: 100%;
`

interface HeaderProps {
  colorUser: string
}
export const Header = styled.View<HeaderProps>`
  background-color: ${({ colorUser }) => colorUser};
  height: 200px;
`

export const LogoutButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 30px 20px 0 0;
`

export const UserImageContainer = styled.View`
  align-self: center;
  background-color: #fff;
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  top: 130px;
`

export const Scroll = styled.ScrollView`
  margin-top: 75px;
`

export const ToggleContainer = styled.View`
  position: relative;
  top: 170px;
  left: 12px;
`

export const WrapperInput = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`
