import Immutable from 'immutable'
import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import {reducer as auth} from 'fl-auth-redux'

export default combineReducers({
  auth,
  form,
  config: (state=new Immutable.Map()) => state,
})
