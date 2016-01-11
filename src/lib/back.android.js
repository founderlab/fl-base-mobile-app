import {BackAndroid} from 'react-native'

export default function configureBack(navigator) {

  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    }
    return false
  })

}
