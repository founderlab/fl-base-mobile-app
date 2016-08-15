import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

export default EStyleSheet.create({

  navbar: {
  },

  container: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },

  icon: {
    // backgroundColor: '#dff',
    // flex: 1,
    color: '#fff',
    fontSize: 20,
    width: 20,
  },

  navbarText: {
    // backgroundColor: '#ffd',
    // flex: 1,
    // marginVertical: 10,
    fontSize: 16,
  },

  navbarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },

  navbarLeftButton: {
    paddingLeft: 5,
  },

  navbarRightButton: {
    paddingRight: 5,
  },

})
