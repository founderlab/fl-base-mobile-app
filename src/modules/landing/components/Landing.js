import React, {
  Text,
  View,
} from 'react-native'

import Button from '../../ui/components/Button'
import button_styles from '../../ui/styles/button'
import styles from '../styles'

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ios
        </Text>
        <Text style={styles.instructions}>
          more text ->
        </Text>

        <Button style={button_styles.button} onPress={this.props.onLogin}>
          login
        </Button>

      </View>
    )
  }
}

Landing.propTypes = {
  onLogin: React.PropTypes.func.isRequired,
}
