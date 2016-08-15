import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {View} from 'react-native'

import LinkButton from '../../ui/components/LinkButton'

export default class DrawerMenu extends React.Component {
  render() {
    const {auth, nav} = this.props
    const logged_in = auth.get('access_token')
    let links = null

    if (!logged_in) {
      links = (
        <View>
          <LinkButton key="login" nav={nav} to="login">
            login
          </LinkButton>
          <LinkButton key="register" nav={nav} to="register">
            register
          </LinkButton>
        </View>
      )
    }
    else {
      links = (
        <View>
          <LinkButton nav={nav} to="/menu">
            Home
          </LinkButton>

          <LinkButton nav={nav} to="/settings">
            Settings
          </LinkButton>

          <LinkButton nav={nav} to="/logout">
            Logout
          </LinkButton>
        </View>
      )
    }

    return (
      <View>
        {links}
      </View>
    )
  }
}

DrawerMenu.propTypes = {
  auth: React.PropTypes.object.isRequired,
  nav: React.PropTypes.object.isRequired,
}
