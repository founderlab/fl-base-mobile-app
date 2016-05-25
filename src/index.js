import React, {AppRegistry} from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux/native'
import {fromJS} from 'immutable'
import {requestMiddleware} from 'redux-request-middleware'
import createRequestModifier from 'superagent-request-modifier'
import {accessTokenMiddleware, requestLoggerMiddleware} from 'fl-auth-redux'

import observeStore from './lib/observeStore'
import config from './config'
import reducer from './reducer'
import Nav from './routing/Nav'

const user = null

const initialState = {
  auth: fromJS({user: user || {}}),
  config: fromJS(config),
}

const middlewares = applyMiddleware(thunk, accessTokenMiddleware, requestLoggerMiddleware, requestMiddleware)
const finalCreateStore = middlewares(createStore)
const store = finalCreateStore(reducer, initialState)

const requestModifier = createRequestModifier(require('superagent'), {hostname: config.hostname})
observeStore(store, store => store.auth.get('accessToken'), accessToken => {
  requestModifier.setHeader({authorization: `Bearer ${accessToken}`})
  console.log('requestModifier.setHeader', {authorization: `Bearer ${accessToken}`})
})

class FLNativeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('FounderLab_replaceme', () => FLNativeApp)
