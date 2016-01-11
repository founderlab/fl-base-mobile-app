import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F56CFF',
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
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Android!
        </Text>
      </View>
    )
  }
}

