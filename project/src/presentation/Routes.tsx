import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EmailAuthentication } from './screens/EmailAuthentication'
import { Home } from './screens/Home'
import { Login } from './screens/Login'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EmailAuthentication" component={EmailAuthentication} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes }
