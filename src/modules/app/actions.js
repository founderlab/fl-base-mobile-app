import _ from 'lodash' // eslint-disable-line

export const TYPES = {
  APP_LOADED: 'APP_LOADED',
}

export function appLoaded() {
  return {
    type: TYPES.APP_LOADED,
  }
}
