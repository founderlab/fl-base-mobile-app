import request from 'superagent'
import config from '../../config'

const TYPES = {
  FACEBOOK_LOGIN: 'LOGIN',
}

export function facebookLogin(data, callback) {
  return {
    type: TYPES.FACEBOOK_LOGIN,
    request: request.post(`${config.url}/auth/facebook/mobile`).send(data),
    callback,
  }
}
