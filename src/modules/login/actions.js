import request from 'superagent'
import Profile from '../../models/Profile'
import config from '../../config'

export const TYPES = {
  LOAD_START: 'LOAD_START',
  FACEBOOK_LOGIN: 'LOGIN',
  PROFILE_LOAD: 'PROFILE_LOAD',
  PROFILE_SAVE: 'PROFILE_SAVE',
}

export function facebookLogin(data, callback) {
  return {
    type: TYPES.FACEBOOK_LOGIN,
    request: request.post(`${config.url}/auth/facebook/mobile`).send(data),
    callback,
  }
}

// Just set the loading flag, useful if we're about to do some auth related stuff with facebook's api
export function startLoading() {
  return {
    type: TYPES.LOAD_START,
  }
}

export function loadActiveProfile(query, callback) {
  query.$one = true
  return {
    type: TYPES.PROFILE_LOAD,
    active: true,
    request: Profile.cursor(query),
    callback,
  }
}

export function updateProfile(data, callback) {
  const profile = new Profile(data)
  return {
    type: TYPES.PROFILE_SAVE,
    request: profile.save.bind(profile),
    callback,
  }
}
