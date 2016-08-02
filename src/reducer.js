import Immutable from 'immutable'
import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import {reducer as auth} from 'fl-auth-redux'
import notifications from './modules/app/notificationReducer'

export default combineReducers({
  auth,
  form,
  notifications,
  config: (state=new Immutable.Map()) => state,
})
