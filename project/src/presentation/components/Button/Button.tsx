import React from 'react'

import { ButtonStyled, Text } from './Button.styles'

export interface ButtonProps {
  label: string
  disabled?: boolean
  color: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, disabled, color, onClick } = props

  const handlePress = () => {
    if (!disabled) onClick()
  }

  return (
    <ButtonStyled onPress={handlePress} disabled={disabled} testID="Button/ButtonStyled" color={color}>
      <Text>{label}</Text>
    </ButtonStyled>
  )
}

export { Button }
