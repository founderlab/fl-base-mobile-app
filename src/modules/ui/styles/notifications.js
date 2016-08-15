import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const windowSize = Dimensions.get('window')

export default EStyleSheet.create({

  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    backgroundColor: '#fec',
    padding: 20,
  },

  warning: {
    padding: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'stretch',
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
})
