import React from 'react'

import { ButtonStyled, Text } from './Button.styles'

export interface ButtonProps {
  label: string
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, disabled, onClick } = props

  const handlePress = () => {
    if (!disabled) onClick()
  }

  return (
    <ButtonStyled onPress={handlePress} disabled={disabled} testID="Button/ButtonStyled">
      <Text>{label}</Text>
    </ButtonStyled>
  )
}

export { Button }
