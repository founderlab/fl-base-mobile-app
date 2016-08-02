import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import layoutStyles from '../../ui/styles/layout'
import typographyStyles from '../../ui/styles/typography'
import formStyles from '../../ui/styles/form'
import buttonStyles from '../../ui/styles/button'
import Button from '../../ui/components/Button'
import LoginForm from './LoginForm'

export default class Login extends React.Component {

  render() {
    const {onSubmit} = this.props

    return (
      <View style={layoutStyles.container}>
        <LoginForm onSubmit={onSubmit} {...this.props} />
      </View>
    )
  }
}

Login.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
}
