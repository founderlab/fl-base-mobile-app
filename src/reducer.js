import Immutable from 'immutable'
import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import auth from './modules/login/reducer'
import app from './modules/app/reducer'
import notifications from './modules/app/notificationReducer'
import path from './modules/routing/reducer'
import config from './config'

export default combineReducers({
  app,
  auth,
  form,
  notifications,
  path,
  config: (state=new Immutable.Map(config)) => state,
})
