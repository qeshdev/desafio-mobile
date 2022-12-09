import React from 'react'

import { Container, ImageStyled, Label, StyledInput } from './Input.styles'

export interface InputProps {
  label: string
  value: string
  placeholder: string
  secureText: boolean
  disabled?: boolean
  editorMode?: boolean
  onChangeText: (text: string) => void
  onSubmitEditing?: () => void
}

/**
 * A stylized input for the application
 *
 * @param label           The label of the input
 * @param value           The value of the input
 * @param placeholder     The placeholder of the input
 * @param secureText      The boolean to show or hide the password
 * @param disabled        The boolean to disable the input
 * @param editorMode      The boolean to show or hide the edit icon
 * @param onChangeText    The function to be called when the input text is changes
 * @param onSubmitEditing The function to be called when the input text is submitted
 */

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, value, placeholder, disabled, secureText, editorMode, onChangeText, onSubmitEditing } = props

  return (
    <Container pointerEvents={disabled ? 'none' : 'box-none'}>
      {editorMode && <ImageStyled source={require('../../../assets/edit-icon.png')} />}
      <Label>{label}</Label>
      <StyledInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureText}
        keyboardType={'default'}
        testID="StyledInput/Input"
        onChangeText={onChangeText}
        returnKeyType="next"
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  )
}

export { Input }
