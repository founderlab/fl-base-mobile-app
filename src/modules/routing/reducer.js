import _ from 'lodash' // eslint-disable-line
import {TYPES} from './actions'

const defaultState = ''

export default function reducer(state=defaultState, action={}) {

  switch (action.type) {
    case TYPES.ROUTE:
    case TYPES.ROUTE_RESET_TO:
    case TYPES.ROUTE_PUSH:
    case TYPES.ROUTE_POP:
      return action.route

    default:
      return state
  }
}
