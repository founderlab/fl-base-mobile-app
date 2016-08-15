import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {connect} from 'react-redux'
import Notifications from '../components/Notifications'
import {dismissAll} from '../notificationActions'

class NotificationsContainer extends React.Component {
  static propTypes = {
    notifications: React.PropTypes.object.isRequired,
    dismissAll: React.PropTypes.func.isRequired,
  }

  handleDismissAll = () => this.props.dismissAll();

  render() {
    const notifications = this.props.notifications.get('notifications').toJSON()
    return (
      <Notifications notifications={notifications} onDismissAll={this.handleDismissAll}/>
    )
  }

}

export default connect(state => ({notifications: state.notifications}), {dismissAll})(NotificationsContainer)
