import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Text from '../../ui/components/Text'
import LinkButton from '../../ui/components/LinkButton'
import notificationStyles from '../../ui/styles/notifications'

export default class Notifications extends React.Component {
  static propTypes = {
    notifications: React.PropTypes.array.isRequired,
    onDismissAll: React.PropTypes.func.isRequired,
  }

  render() {
    const {notifications, onDismissAll} = this.props
    if (!notifications.length) return null

    return (
      <View style={notificationStyles.container}>
        {_.map(notifications, n => (<Text key={n.createdDate}>{n.message}</Text>))}
        <LinkButton onPress={onDismissAll} style={notificationStyles.icon}><Icon name="close" size={20} color="#333" /></LinkButton>
      </View>
    )
  }
}

