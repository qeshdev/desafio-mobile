import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EmailAuthentication } from './screens/EmailAuthentication/EmailAuthentication'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EmailAuthentication" component={EmailAuthentication} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes }
