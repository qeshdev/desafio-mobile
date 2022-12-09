import { Animated } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(Animated.View)`
  width: 40px;
  height: 23px;
  border-radius: 25px;
  background-color: #521aa3;
  align-items: flex-start;
  justify-content: center;
`
export const RadiusButton = styled.TouchableWithoutFeedback`
  flex: 1;
`

export const CenterButton = styled(Animated.View)`
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 100px;
  background-color: #ffff;
`
