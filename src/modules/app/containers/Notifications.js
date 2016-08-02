import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {connect} from 'react-redux'
import Notifications from '../components/Notifications'
import {dismissAll} from '../notificationActions'

export default class NotificationsContainer extends React.Component {

  handleDismissAll = () => this.props.dismissAll();

  render() {
    const notifications = this.props.notifications.get('notifications').toJSON()
    return (
      <Notifications notifications={notifications} onDismissAll={this.handleDismissAll}/>
    )
  }

}

NotificationsContainer.propTypes = {
  notifications: React.PropTypes.object.isRequired,
  dismissAll: React.PropTypes.func.isRequired,
}

export default connect(state => ({notifications: state.notifications}), {dismissAll})(NotificationsContainer)
