import React, { useEffect, useState } from 'react'
import { Image, ImageSourcePropType, Modal, ScrollView, StatusBar, Text, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

import { getUserResponse } from '../../../domain/protocols/user'
import { updateUser } from '../../../infra/user/user'
import { getUser } from '../../../infra/user/user'
import { Button } from '../../../presentation/components/Button'
import { Input } from '../../../presentation/components/Input'
import { Toggle } from '../../../presentation/components/Toggle/Toggle'
import { colors, countries } from '../../../presentation/utils/infosHardcoded'
import { setToastMessage } from '../../../presentation/utils/toastNative'
import { UserImage } from '../Login/Login.styles'
import {
  Container,
  ContainerEditIcon,
  Header,
  LogoutButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Scroll,
  SelectCountry,
  SelectNationality,
  ToggleContainer,
  UserImageContainer,
  WrapperInput,
  SelectColor,
  ContainerColors,
  ReturnsOriginalValuesButton,
  ReturnsOriginalValuesText,
  SaveButtonContainer
} from './Home.styles'

const Home: React.FC = ({ navigation, route }: any) => {
  const { email: emailAuthenticated } = route.params

  const [userInfo, setUserInfo] = useState<getUserResponse | null>(null)
  const [myUser, setMyUser] = useState<boolean>(false)
  const [editorMode, setEditorMode] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [userToken, setUserToken] = useState<string>('')

  const [userImage, setUserImage] = useState<ImageSourcePropType>(require('../../../assets/no-photo.png'))
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [nationality, setNationality] = useState<string>('')
  const [userColor, setUserColor] = useState<string>(userInfo?.color || '#42C1C7')

  /**
   * @description
   * This function is responsible for opening the image picker
   * and setting the user's image
   */
  const handleUserImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setUserImage({ uri: image.path })
    })
  }

  /**
   * @description
   * This function is responsible for saving the user's information
   * and updating the user's information
   */
  const handleSave = async () => {
    const user = {
      name,
      phone,
      color: userColor,
      nationality
    }
    const updateInfos = await updateUser(userToken, user)
    if (updateInfos instanceof Error) {
      setToastMessage('Erro ao atualizar as informações 😕')
      return
    }

    setToastMessage('Informações atualizadas com sucesso! 😃')
    setEditorMode(false)
  }

  /**
   * @description
   * This useEffect is responsible for updating the user's information
   * when the user is authenticated and when the user is not authenticated
   */
  useEffect(() => {
    if (myUser) {
      setName('Marcus')
      setPhone('31 99366-7947')
      setEmail(emailAuthenticated)
      setNationality('Brasileiro')
    } else {
      setName(userInfo?.name as getUserResponse['name'])
      setPhone(userInfo?.phone as getUserResponse['phone'])
      setEmail(userInfo?.email as getUserResponse['email'])
      setNationality(userInfo?.nationality as getUserResponse['nationality'])
    }
  }, [myUser, userInfo, emailAuthenticated])

  /**
   * @description
   * This useEffect is responsible for authenticating the user's email
   * and getting the user's information
   */
  useEffect(() => {
    if (emailAuthenticated === 'marcus@quesh.ia') {
      setMyUser(true)
    }

    const authEmail = async () => {
      const getUserInfos = await getUser(email)
      if (getUserInfos instanceof Error) {
        return
      }

      setUserToken(getUserInfos.token)
      setUserInfo(getUserInfos)
    }
    authEmail()
  }, [email, emailAuthenticated])

  return (
    <Container>
      <StatusBar backgroundColor={userInfo?.color || userColor} barStyle="light-content" />
      <Header color={userInfo?.color || userColor}>
        <LogoutButton
          onPress={() => {
            navigation.navigate('EmailAuthentication')
          }}
        >
          <Image source={require('../../../assets/logout.png')} />
        </LogoutButton>

        <ToggleContainer>
          <Toggle onChange={() => setEditorMode(!editorMode)} value={editorMode} />
        </ToggleContainer>
        <UserImageContainer onPress={handleUserImage} disabled={!editorMode}>
          {editorMode && (
            <ContainerEditIcon>
              <Image source={require('../../../assets/edit-icon.png')} />
            </ContainerEditIcon>
          )}
          <UserImage source={userImage} />
        </UserImageContainer>
      </Header>
      <Scroll showsHorizontalScrollIndicator>
        <WrapperInput>
          <Input
            label="Nome"
            onChangeText={value => setName(value)}
            placeholder="Digite seu nome"
            secureText={false}
            value={name}
            disabled={!editorMode}
            editorMode={editorMode}
          />
        </WrapperInput>
        <WrapperInput>
          <Input
            label="Telefone"
            onChangeText={value => setPhone(value)}
            placeholder="Digite seu telefone"
            secureText={false}
            value={phone}
            phoneInput
            disabled={!editorMode}
            editorMode={editorMode}
          />
        </WrapperInput>
        <WrapperInput>
          <Input
            label="E-mail"
            onChangeText={value => setEmail(value)}
            placeholder="Digite seu e-mail"
            secureText={false}
            value={email}
            disabled
          />
        </WrapperInput>
        <SelectNationality onPress={() => setShowModal(!showModal)} disabled={!editorMode}>
          <Input
            label="Nacionalidade"
            onChangeText={value => setNationality(value)}
            placeholder="Digite sua nacionalidade"
            secureText={false}
            value={nationality}
            editorMode={editorMode}
            disabled
          />
        </SelectNationality>
        <Modal animationType={'slide'} transparent={false} visible={showModal}>
          <ModalHeader color={userColor}>
            <ModalTitle>NACIONALIDADE</ModalTitle>
          </ModalHeader>
          <ScrollView>
            <ModalContent>
              {countries.map(country => (
                <SelectCountry
                  onPress={() => {
                    setNationality(country.label)
                    setShowModal(false)
                  }}
                >
                  <Text>{country.label}</Text>
                </SelectCountry>
              ))}
            </ModalContent>
          </ScrollView>
        </Modal>
        {editorMode && (
          <ContainerColors>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {colors.map(color => (
                <SelectColor key={color.color} color={color.color} onPress={() => setUserColor(color.color)}>
                  <View />
                </SelectColor>
              ))}
            </ScrollView>
          </ContainerColors>
        )}
        {editorMode && (
          <ReturnsOriginalValuesButton onPress={() => setUserColor('#42C1C7')}>
            <Image source={require('../../../assets/return.png')} />
            <ReturnsOriginalValuesText>Voltar a cor original</ReturnsOriginalValuesText>
          </ReturnsOriginalValuesButton>
        )}
        {!editorMode && (
          <SaveButtonContainer>
            <Button color={userColor} onClick={handleSave} label="Salvar" />
          </SaveButtonContainer>
        )}
      </Scroll>
    </Container>
  )
}

export { Home }
