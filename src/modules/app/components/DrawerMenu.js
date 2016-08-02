import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {
  Text,
  View,
} from 'react-native'

import Link from '../../ui/components/Link'

import styles from '../styles'
import button_styles from '../../ui/styles/button'
import layout_styles from '../../ui/styles/layout'
import typography_styles from '../../ui/styles/typography'

export default class DrawerMenu extends React.Component {
  render() {
    const {auth, nav} = this.props
    const logged_in = auth.get('access_token')
    let links = null

    if (!logged_in) {
      links = (
        <View>
          <Link key="login" style={button_styles.button} nav={nav} to="login">
            login
          </Link>
          <Link key="register" style={button_styles.button} nav={nav} to="register">
            register
          </Link>
        </View>
      )
    }
    else {
      links = (
        <View>
          <Link style={button_styles.button} nav={nav} to="fire_conditions">
            Fire conditions
          </Link>

          <Link style={button_styles.button} nav={nav} to="friends_and_family">
            Friends and family
          </Link>

          <Link style={button_styles.button} nav={nav} to="live_updates">
            Live updates
          </Link>

          <Link style={button_styles.button} nav={nav} to="settings">
            Settings
          </Link>
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
