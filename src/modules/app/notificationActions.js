import _ from 'lodash' // eslint-disable-line

export const TYPES = {
  NOTIFICATION_ADD: 'NOTIFICATION_ADD',
  NOTIFICATION_DISMISS_ALL: 'NOTIFICATION_DISMISS_ALL',
  NOTIFICATION_PRUNE: 'NOTIFICATION_PRUNE',
}

export function add(message, max_age_ms) {
  return {
    type: TYPES.NOTIFICATION_ADD,
    notification: {
      message,
      max_age_ms,
      createdDate: new Date(),
    },
  }
}

export function dismissAll() {
  return {
    type: TYPES.NOTIFICATION_DISMISS_ALL,
  }
}

export function prune() {
  return {
    type: TYPES.NOTIFICATION_PRUNE,
  }
}
