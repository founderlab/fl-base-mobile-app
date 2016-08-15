import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },

  inputs: {
    marginTop: 10,
    marginBottom: 10,
    flex: 0.3,
  },

  facebookButtonContainer: {
    alignItems: 'center',
    flex: 0.1,
  },

  registerButton: {
    padding: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'stretch',
    flex: 0.1,
  },

  loginButton: {
    padding: 10,
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'stretch',
    flex: 0.1,
  },

})
