import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #ffff;
  height: 100%;
  width: 100%;
`

interface HeaderProps {
  color: string
}
export const Header = styled.View<HeaderProps>`
  background-color: ${({ color }) => color};
  height: 200px;
`

export const LogoutButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 30px 20px 0 0;
`

export const UserImageContainer = styled.TouchableOpacity`
  align-self: center;
  background-color: #fff;
  border-radius: 100px;
  justify-content: center;
  position: absolute;
  top: 130px;
`

export const ContainerEditIcon = styled.View`
  align-items: center;
  background-color: #fff;
  border: 1px solid #42c1c7;
  border-radius: 100px;
  bottom: 20px;
  height: 25px;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 25px;
  z-index: 10000;
`

export const Scroll = styled.ScrollView`
  margin-top: 75px;
`

export const ToggleContainer = styled.View`
  left: 12px;
  position: relative;
  top: 170px;
`

export const WrapperInput = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

export const SelectNationality = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`

interface ColorProps {
  color: string
}
export const ModalHeader = styled.View<ColorProps>`
  align-items: center;
  background-color: ${({ color }) => color};
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
`

export const ModalTitle = styled.Text`
  color: #393939;
  font-size: 20px;
  font-weight: bold;
`

export const ModalContent = styled.View`
  background-color: '#ffffff';
  height: 75%;
  width: 100%;
`

export const SelectCountry = styled.TouchableOpacity`
  align-items: center;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  height: 60px;
  justify-content: center;
`

export const ContainerColors = styled.View`
  flex-direction: row;
`
export const SelectColor = styled.TouchableOpacity<ColorProps>`
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-radius: 100px;
  background-color: ${({ color }) => color};
  margin: 0 1px 14px 4px;
`

export const ReturnsOriginalValuesButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const ReturnsOriginalValuesText = styled.Text`
  color: #42c1c7;
  font-size: 18px;
  font-weight: bold;
  margin-left: 12px;
`

export const SaveButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
