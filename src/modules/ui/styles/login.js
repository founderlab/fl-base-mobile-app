import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    marginTop: 40,
  },

  inputsContainer: {
    // flex: 1,
    marginTop: 40,
  },

  buttonsContainer: {
    // flex: 1,
    marginTop: 40,
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingTop: 20,
    borderBottomColor: '#999',
  },

  error: {
    position: 'absolute',
    bottom: -20,
    right: 10,
  },

  formIcon: {
    flex: 0.1,
    lineHeight: 30,
    paddingLeft: 10,
    color: '#999',
  },

  input: {
    flex: 0.9,
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },

})
