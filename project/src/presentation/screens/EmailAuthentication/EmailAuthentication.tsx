import React, { useState } from 'react'
import { StatusBar, ToastAndroid } from 'react-native'

import { getUser } from '../../../infra/user/user'
import { Input } from '../../components/Input'
import { emailValidation } from '../../utils/string'
import { Container, EmailContainer, ImageStyled, ImageContainer, BottomImage } from './EmailAuthentication.styles'

const EmailAuthentication: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('')

  const setToastMessage = (message: string) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  }

  const handleLogin = async (): Promise<void> => {
    const emailIsValid = emailValidation(email)

    if (emailIsValid) {
      const authenticateUser = await getUser(email)

      if (authenticateUser) {
        navigation.navigate('Login', { email })
      }
    } else {
      setToastMessage('E-mail inválido')

      return
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <ImageContainer>
        <ImageStyled source={require('../../../assets/qesh-blue.png')} />
      </ImageContainer>
      <EmailContainer>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail para logar ou cadastrar"
          onChangeText={value => setEmail(value)}
          value={email}
          secureText={false}
          onSubmitEditing={handleLogin}
        />
      </EmailContainer>
      <BottomImage source={require('../../../assets/login-email-purple.png')} />
      <BottomImage source={require('../../../assets/login-email-blue.png')} />
    </Container>
  )
}

export { EmailAuthentication }
