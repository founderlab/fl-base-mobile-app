import _ from 'lodash' // eslint-disable-line
import {fromJS} from 'immutable'
import {reducer as authReducer} from 'fl-auth-redux'
import {TYPES} from './actions'

const defaultState = fromJS({})

export default function reducer(_state=defaultState, action={}) {
  let state = _state

  switch (action.type) {
    case TYPES.LOAD_START:
    case TYPES.PROFILE_LOAD + '_START':
    case TYPES.PROFILE_SAVE + '_START':
      return state.merge({loading: true, errors: {}})

    case TYPES.PROFILE_LOAD + '_ERROR':
    case TYPES.PROFILE_SAVE + '_ERROR':
      return state.merge({loading: false, errors: {profile: action.error || action.res.body.error}})

    case TYPES.PROFILE_LOAD +'_SUCCESS':
      if (action.active) {
        state = state.merge({profile: action.model})
      }
      return state.merge({
        loading: false,
        errors: {},
      }).mergeDeep({
        profiles: action.models,
      })

    // Assumes we're only ever saving the active user's profile
    case TYPES.PROFILE_SAVE + '_SUCCESS':
      return state.mergeDeep({
        loading: false,
        errors: {},
        profiles: action.models,
        profile: action.model,
      })

    default:
      return authReducer(state, action)

  }
}
