import React, {
  Text,
  View,
} from 'react-native'

import Link from '../../ui/components/Link'
import button_styles from '../../ui/styles/button'
import styles from '../styles'
import layout_styles from '../../ui/styles/layout'
import typography_styles from '../../ui/styles/typography'

export default class Menu extends React.Component {
  render() {
    const {nav} = this.props

    return (
      <View style={layout_styles.container}>
        <Text style={typography_styles.h1}>
          FireFront
        </Text>
        <Text style={typography_styles.text}>
          more text ->
        </Text>

        <Link style={button_styles.button} nav={nav} to="login">
          login
        </Link>

      </View>
    )
  }
}

Menu.propTypes = {
  nav: React.PropTypes.object.isRequired,
}
