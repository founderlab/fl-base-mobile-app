import _ from 'lodash'
import {prune, add as addNotification} from '../modules/app/notificationActions'

const defaults = {
  connectionError: action => action.error && action.error.crossDomain,
}

export function createLostConnectionMiddleware(_options={}) {
  const options = _.merge(defaults, _options)

  return function lostConnectionMiddleware(store) {
    return next => action => {
      if (!options.connectionError(action)) return next(action)

      store.dispatch(addNotification('No connection', 4900))
      setTimeout(() => store.dispatch(prune()), 5000)

      next(action)
    }
  }
}

export default createLostConnectionMiddleware()
