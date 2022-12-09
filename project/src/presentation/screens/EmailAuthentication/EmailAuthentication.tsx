import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import { getUserResponse } from '../../../domain/protocols/user'
import { getUser } from '../../../infra/user/user'
import { setToastMessage } from '../../../presentation/utils/toastNative'
import { Input } from '../../components/Input'
import { emailValidation } from '../../utils/string'
import { Container, EmailContainer, ImageStyled, ImageContainer, BottomImage } from './EmailAuthentication.styles'

const EmailAuthentication: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('')

  const handleEmailValidate = async (): Promise<void> => {
    const emailIsValid = emailValidation(email)

    if (emailIsValid) {
      const authenticateUser = (await getUser(email)) as getUserResponse

      if (authenticateUser.email || email === 'marcus@quesh.ia') {
        navigation.navigate('Login', { email })
      } else {
        setToastMessage('E-mail não cadastrado')
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
          onSubmitEditing={handleEmailValidate}
        />
      </EmailContainer>
      <BottomImage source={require('../../../assets/login-email-purple.png')} />
      <BottomImage source={require('../../../assets/login-email-blue.png')} />
    </Container>
  )
}

export { EmailAuthentication }
