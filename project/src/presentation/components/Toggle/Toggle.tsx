import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

import { Container, RadiusButton, CenterButton } from './Toggle.styles'

interface ToggleProps {
  value: boolean
  onChange: (newValue: boolean) => void
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
  const { value, onChange } = props

  const animation = useRef(new Animated.Value(value ? 1 : 0)).current

  useEffect(() => {
    Animated.spring(animation, {
      toValue: value ? 1 : 0,
      useNativeDriver: false
    }).start()
  }, [value, animation])

  const animatedStyles = {
    backgroundButton: {
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E0E0E0', '#521AA3']
      })
    },
    slideButton: {
      transform: [
        {
          translateX: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0.4, 16.4]
          })
        }
      ]
    }
  }

  return (
    <RadiusButton onPressIn={() => onChange(!value)} hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
      <Container style={[animatedStyles.backgroundButton]}>
        <CenterButton style={[animatedStyles.slideButton]} />
      </Container>
    </RadiusButton>
  )
}

const ToggleMemo = React.memo(Toggle)

export { ToggleMemo as Toggle }
