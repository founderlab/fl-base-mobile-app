import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const windowSize = Dimensions.get('window')

export default EStyleSheet.create({
  bottomMenu: {
    elevation: 99,
    height: 48,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowSize.width,
    flexDirection: 'row',
  },

  bottomMenuLink: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333',
  },

  bottomMenuLinkActive: {
    backgroundColor: '#333',
  },

  bottomMenuLinkIcon: {
    textAlign: 'center',
  },

})
