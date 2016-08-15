import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({

  disabled: {
    backgroundColor: '#aaaaaa',
  },

  loader: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  primaryButton: {
    color: '#fff',
    backgroundColor: '#5FC9F8',
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 30,
  },

  shareButtons: {
    position: 'absolute',
    top: -32,
    right: 7,
    flexDirection: 'row',
  },

  circleButton: {
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 25,
    marginRight: 20,
    backgroundColor: '#94E39B',
    // backgroundColor: '#fff',
    // backgroundColor: '#94E39B',

    //TODO: Shadows aren't working for some reason
    shadowColor: '#222',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonIcon: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 30,
    // color: '#333',
    color: '#fff',
  },

  inactiveButton: {
    backgroundColor: '#5FC9F8',
  },
  activeButton: {
    backgroundColor: '#00B1FF',
  },
  activeButtonIcon: {
    color: '#fff',
  },

  biggerButton: {
    borderRadius: 35,
  },
  biggerButtonIcon: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 45,
  },

})
