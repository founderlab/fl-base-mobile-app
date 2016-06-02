import React from 'react'
import {
  Text,
  View,
} from 'react-native'

import Link from '../../ui/components/Link'
import buttonStyles from '../../ui/styles/button'
import styles from '../styles'
import layoutStyles from '../../ui/styles/layout'
import typographyStyles from '../../ui/styles/typography'

export default class Menu extends React.Component {
  render() {
    const {nav} = this.props

    return (
      <View style={layoutStyles.container}>
        <Text style={typographyStyles.h1}>
          FounderLab_replaceme
        </Text>
        <Text style={typographyStyles.text}>
          more text ->
        </Text>

        <Link style={buttonStyles.button} nav={nav} to="login">
          login
        </Link>

      </View>
    )
  }
}

Menu.propTypes = {
  nav: React.PropTypes.object.isRequired,
}
