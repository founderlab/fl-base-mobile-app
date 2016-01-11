import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import {reduxForm} from 'redux-form/native'

import form_styles from '../../ui/styles/form'
import button_styles from '../../ui/styles/button'
import Button from '../../ui/components/Button'

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCaF',
  },
})

class LoginForm extends React.Component {

  render() {
    const {fields: {email, password}, handleSubmit, auth} = this.props
    const errors = auth.get('errors') || {}
    const error_msg = process.env.NODE_ENV === 'production' ? 'Uh oh, something went wrong' : (errors.login || '').toString()

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ios login!
        </Text>
        <TextInput
          style={form_styles.text_input}
          placeholder="email"
          // onChangeText={(email) => this.setState({email})}
          // value={this.state.email}
          {...email}
        />
        <TextInput
          style={form_styles.text_input}
          placeholder="password"
          // onChangeText={(password) => this.setState({password})}
          // value={this.state.password}
          {...password}
        />
        {errors.login && <Text>{error_msg}</Text>}
        <Button onPress={handleSubmit} style={button_styles.button}>
          Login
        </Button>
      </View>
    )
  }
}

LoginForm.propTypes = {
  auth: React.PropTypes.object,
  fields: React.PropTypes.object.isRequired,

  form_styles: React.PropTypes.object,
  button_styles: React.PropTypes.object,

  handleSubmit: React.PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
})(LoginForm)
