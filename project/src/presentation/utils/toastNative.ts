import { ToastAndroid } from 'react-native'

export const setToastMessage = (message: string) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER)
}
