import React from 'react'
import {View, TextInput} from 'react-native'
import {reduxForm} from 'redux-form'
import Icon from 'react-native-vector-icons/FontAwesome'

import Text from '../../ui/components/Text'
import appStyles from '../../ui/styles/app'
import textStyles from '../../ui/styles/text'
import notificationStyles from '../../ui/styles/notifications'
import loginStyles from '../../ui/styles/login'
import buttonStyles from '../../ui/styles/button'
import LinkButton from '../../ui/components/LinkButton'

class LoginForm extends React.Component {

  static propTypes = {
    loading: React.PropTypes.bool,
    errorMsg: React.PropTypes.string,
    fields: React.PropTypes.object.isRequired,
    registerMode: React.PropTypes.bool,
    handleSubmit: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {}
  }

  handleSubmit = data => {
    this.setState({submitted: true})
    this.props.handleSubmit(data)
  }

  handleSelectPassword = () => this.refs.password.focus()
  handleSelectEmail = () => this.refs.email.focus()

  render() {
    const {fields: {email, password, name}, loading, errorMsg, registerMode} = this.props
    const handleSubmit = this.handleSubmit
    const showErrors = this.state.submitted

    const inputProps = {
      style: [loginStyles.input, textStyles.darkGray],
      placeholderTextColor: '#aaa',
      autoCorrect: false,
    }

    return (
      <View style={appStyles.container}>

        <View style={loginStyles.headerContainer}>
          <Text style={[textStyles.h1, textStyles.darkGray]}>{registerMode ? 'Sign up' : 'Sign in'}</Text>
        </View>

        <View style={loginStyles.inputsContainer}>

          {registerMode && (
            <View style={loginStyles.inputContainer}>
              <Icon style={loginStyles.formIcon} name="user" size={20} />
              <TextInput
                placeholder="Full name"
                onSubmitEditing={this.handleSelectEmail}
                autoFocus
                {...inputProps}
                {...name}
              />
              {showErrors && name.error && <Text style={[loginStyles.error, textStyles.darkGray]}>{name.error}</Text>}
            </View>
          )}

          <View style={loginStyles.inputContainer}>
            <Icon style={loginStyles.formIcon} name="envelope" size={20} />
            <TextInput
              ref="email"
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              onSubmitEditing={this.handleSelectPassword}
              autoFocus={!registerMode}
              {...inputProps}
              {...email}
            />
            {showErrors && email.error && <Text style={[loginStyles.error, textStyles.darkGray]}>{email.error}</Text>}
          </View>

          <View style={loginStyles.inputContainer}>
            <Icon style={loginStyles.formIcon} name="lock" size={20} />
            <TextInput
              ref="password"
              placeholder="Password (6+ characters)"
              autoCapitalize="none"
              onSubmitEditing={handleSubmit}
              secureTextEntry
              {...inputProps}
              {...password}
            />
            {showErrors && password.error && <Text style={[loginStyles.error, textStyles.darkGray]}>{password.error}</Text>}
          </View>

          {!registerMode && (
            <View style={loginStyles.forgotContainer}>
              <Text style={textStyles.lightGray}>Forgot your password?</Text>
            </View>
          )}

        </View>

        <View style={loginStyles.buttonsContainer}>
          <LinkButton onPress={handleSubmit} textStyle={buttonStyles.primaryButton} loading={loading}>
            {registerMode ? `Start exploring` : 'Sign in'}
          </LinkButton>
          {errorMsg && <Text style={notificationStyles.warning}>{errorMsg}</Text>}
        </View>

      </View>
    )
  }
}

function validateEmailPass(data) {
  const errors = {}
  // if (!data.name) {
  //   errors.name = 'Please enter a name! Anything will do'
  // }
  if (!data.email || !data.email.match(/.+@.+/)) {
    errors.email = 'Please enter an email address'
  }
  if (!data.password || !data.password.length) {
    errors.password = 'Password please!'
  }
  else if (data.password.length < 6) {
    errors.password = 'Passwords should be least 6 characters'
  }
  return errors
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password', 'name'],
  validate: validateEmailPass,
})(LoginForm)
