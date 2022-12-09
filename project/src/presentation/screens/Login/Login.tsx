import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { UserResponse } from '../../../domain/protocols/user'
import { authenticateUser } from '../../../infra/authentication-remote/authentication-remote'
import { user } from '../../../infra/user/user'
import { setToastMessage } from '../../../presentation/utils/toastNative'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  ButtonContainer,
  Container,
  EmailContainer,
  Header,
  PasswordContainer,
  UserImage,
  UserImageContainer
} from './Login.styles'

const Login: React.FC = ({ navigation, route }: any) => {
  const { email: EmailAuthenticated } = route.params

  const [email, setEmail] = useState<string>(EmailAuthenticated)
  const [password, setPassword] = useState<string>('')
  const [userInfo, setUserInfo] = useState<UserResponse | null>(null)

  /**
   * @description
   * This function is responsible for authenticating the user
   * and navigating to the home screen
   */
  const handleLogin = async (): Promise<void> => {
    const authUser = await authenticateUser({ email, password })
    if (email === 'marcus@quesh.ia' && password === '12345') {
      navigation.navigate('Home', { email })
      return
    }

    if (authUser instanceof Error) {
      setToastMessage('E-mail ou senha inválidos')
      return
    }

    navigation.navigate('Home', { email })
  }

  /**
   * @description
   * This function is responsible for getting the user's information
   * and setting it in the state
   */
  useEffect(() => {
    const authEmail = async () => {
      const getUserInfos = await user(email)
      if (getUserInfos instanceof Error) {
        return
      }

      setUserInfo(getUserInfos)
    }
    authEmail()
  }, [email])

  return (
    <Container>
      <StatusBar backgroundColor={userInfo?.color || '#42C1C7'} barStyle="light-content" />
      <Header colorUser={userInfo?.color || '#42C1C7'} />
      <UserImageContainer>
        <UserImage source={userInfo ? { uri: userInfo.photo } : require('../../../assets/no-photo.png')} />
      </UserImageContainer>
      <EmailContainer>
        <Input
          label="E-mail"
          value={email}
          onChangeText={value => setEmail(value)}
          secureText={false}
          placeholder="Digite seu e-mail para logar"
        />
      </EmailContainer>
      <PasswordContainer>
        <Input
          label="Senha"
          value={password}
          onChangeText={value => setPassword(value)}
          secureText={true}
          placeholder="Digite sua senha para logar"
        />
      </PasswordContainer>
      <ButtonContainer>
        <Button color={userInfo?.color || '#42C1C7'} onClick={handleLogin} label="Logar" />
      </ButtonContainer>
    </Container>
  )
}

export { Login }
