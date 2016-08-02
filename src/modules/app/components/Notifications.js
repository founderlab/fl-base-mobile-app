import React from 'react'
import {
  Text,
  View,
  // TextInput,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles'
import Button from '../../ui/components/Button'

export default class Notifications extends React.Component {

  render() {
    const {notifications, onDismissAll} = this.props
    if (!notifications.length) return null

    return (
      <View style={styles.notifications_container}>
        <Button onPress={onDismissAll}><Icon name="close" size={10} color="#333" /></Button>
        {_.map(notifications, n => (<Text key={n.createdDate}>{n.message}</Text>))}
      </View>
    )
  }
}

Notifications.propTypes = {
  notifications: React.PropTypes.array.isRequired,
  onDismissAll: React.PropTypes.func.isRequired,
}
