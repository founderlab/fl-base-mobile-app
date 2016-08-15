import _ from 'lodash' // eslint-disable-line
import {fromJS} from 'immutable'
import {TYPES} from './notificationActions'

const defaultState = fromJS({
  notifications: [],
})

export default function reducer(state=defaultState, action={}) {

  switch (action.type) {

    case TYPES.NOTIFICATION_ADD:
      return state.merge({
        notifications: state.get('notifications').push(action.notification),
      })

    case TYPES.NOTIFICATION_DISMISS_ALL:
      return state.merge({notifications: []})

    case TYPES.NOTIFICATION_PRUNE:
      const filter = notification => {
        const now = new Date().getTime()
        const created = new Date(notification.createdDate).getTime()
        return now - created > notification.max_age_ms
      }
      return state.merge({
        notifications: state.get('notifications').filter(filter),
      })

    default:
      return state
  }
}
