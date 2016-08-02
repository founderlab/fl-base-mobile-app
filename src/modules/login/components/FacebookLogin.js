import React from 'react'
import {View} from 'react-native'
import {LoginButton} from 'react-native-fbsdk'

export default class FacebookLogin extends React.Component {

  static defaultProps = {
    readPermissions: [],
    publishPermissions: [],
  }

  render() {
    const {readPermissions, publishPermissions, onFacebookLogin, onFacebookLogout} = this.props

    return (
      <LoginButton
        readPermissions={readPermissions}
        publishPermissions={publishPermissions}
        onLoginFinished={onFacebookLogin}
        onLogoutFinished={onFacebookLogout}
      />
    )
  }
}

FacebookLogin.propTypes = {
  readPermissions: React.PropTypes.array,
  publishPermissions: React.PropTypes.array,
  onFacebookLogin: React.PropTypes.func.isRequired,
  onFacebookLogout: React.PropTypes.func.isRequired,
}
