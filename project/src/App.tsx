import React from 'react'
import { Image, View } from 'react-native'

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image source={require('./assets/logo.png')} />
    </View>
  )
}

export default App
