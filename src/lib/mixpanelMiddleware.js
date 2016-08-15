import _ from 'lodash' // eslint-disable-line
import mixpanel from 'rn-redux-mixpanel'

import {PROFILE_LOAD} from '../modules/login/actions'
import {MIXPANEL_TOKEN} from '../config' // need to make this path correct

// define a blacklist to be used in the ignoreAction filter
const blacklist = [
  // TAG_LOAD,
]

// Export configured mixpanel redux middleware
export default mixpanel({

  // add ignore action filter
  ignoreAction: (action) => {
    return blacklist.indexOf(action.type) > -1
  },

  // Mixpanel Token
  token: MIXPANEL_TOKEN,

  // derive Mixpanel event name from action and/or state
  selectEventName: action => action.type,

  // Per-action selector: Mixpanel event `distinct_id`
  selectDistinctId: (action, state) => {
    return state.auth.get('user') && state.auth.get('user').get('id')
  },

  // Per-action selector: Mixpanel Engage user profile data
  selectUserProfileData: (action, state) => {
    let profile

    // Only update user profile data on SIGN_IN action type
    if ((action.type === PROFILE_LOAD + '_SUCCESS') && action.active) {
      console.log('[selectUserProfileData]', action)
      profile = action.model

      // User data to `$set` via Mixpanel Engage request
      const userProfileData = {
        '$first_name': profile.firstName,
        '$last_name': profile.lastName,
        '$created': profile.createdDate,
        '$email': state.auth.get('user').get('email'),
      }

      console.log('[selectUserProfileData] setting', userProfileData)

      return userProfileData
    }
  },
})
