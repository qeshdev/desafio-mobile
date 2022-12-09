import styled from 'styled-components/native'

interface ButtonProps {
  color: string
}
export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 8px;
  height: 50px;
  justify-content: center;
  width: 350px;
`

export const Text = styled.Text`
  color: #393939;
  font-size: 14px;
  font-weight: bold;
`
