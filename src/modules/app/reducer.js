import _ from 'lodash' // eslint-disable-line
import {fromJS} from 'immutable'
import {TYPES} from './actions'

const defaultState = fromJS({
  loaded: false,
})

export default function reducer(state=defaultState, action={}) {

  switch (action.type) {
    case TYPES.APP_LOADED:
    // case 'REDUX_STORAGE_LOAD':
      console.log('APPLOADED')
      return state.merge({loaded: true})

    default:
      return state
  }
}
