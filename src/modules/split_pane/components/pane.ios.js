import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Button from '../../components/button'
import button_styles from '../../styles/button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC6F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class App extends React.Component {

  onLogin = () => {
    this.props.nav.push({title: 'login'})
  };

  render() {
    console.log('button_styles', button_styles.button)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ios
        </Text>
        <Text style={styles.instructions}>
          more text etc
        </Text>
        <Button style={button_styles.button} onPress={this.onLogin}>
          login
        </Button>
      </View>
    )
  }
}
