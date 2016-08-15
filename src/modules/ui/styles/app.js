import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const windowSize = Dimensions.get('window')

export default EStyleSheet.create({
  container: {
    width: windowSize.width,
    height: windowSize.height,
    backgroundColor: 'transparent',
  },

  bgOverlay: {
    backgroundColor: 'rgba(43, 52, 64, 0.9)',
  },

  fullScreen: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height,
  },

})
