import React from 'react'
import {
  Text,
  View,
  // TextInput,
} from 'react-native'

import layout_styles from '../../ui/styles/layout'
import typography_styles from '../../ui/styles/typography'
import form_styles from '../../ui/styles/form'
import button_styles from '../../ui/styles/button'
import Button from '../../ui/components/Button'

export default class Settings extends React.Component {

  selectPassword = () => this._password && this._password.focus();

  render() {
    const {auth, onLogout} = this.props
    const logged_in = auth.get('access_token')

    return (
      <View style={layout_styles.container}>
        <Text style={typography_styles.h1}>
          Settings
        </Text>

        {logged_in && (
          <Button onPress={onLogout} style={button_styles.button}>
            Logout
          </Button>
        )}
      </View>
    )
  }
}

Settings.propTypes = {
  auth: React.PropTypes.object,

  form_styles: React.PropTypes.object,
  button_styles: React.PropTypes.object,

  onLogout: React.PropTypes.func.isRequired,
}
