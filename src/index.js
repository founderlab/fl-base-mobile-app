import React, {AppRegistry} from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux/native'
import {fromJS} from 'immutable'
import {requestMiddleware} from 'redux-request-middleware'
import createRequestModifier from 'superagent-request-modifier'
import {accessTokenMiddleware, requestLoggerMiddleware} from 'fl-auth-redux'

import observeStore from './lib/observe_store'
import config from './config'
import reducer from './reducer'
import Nav from './routing/Nav'

const user = null

const initial_state = {
  auth: fromJS({user: user || {}}),
  config: fromJS(config),
}

const middlewares = applyMiddleware(thunk, accessTokenMiddleware, requestLoggerMiddleware, requestMiddleware)
const finalCreateStore = middlewares(createStore)
const store = finalCreateStore(reducer, initial_state)

const request_modifier = createRequestModifier(require('superagent'), {hostname: config.hostname})
observeStore(store, store => store.auth.get('access_token'), access_token => {
  request_modifier.setHeader({authorization: `Bearer ${access_token}`})
  console.log('request_modifier.setHeader', {authorization: `Bearer ${access_token}`})
})

class FLNativeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <Nav />
        }
      </Provider>
    )
  }
}

AppRegistry.registerComponent('FounderLab_replaceme', () => FLNativeApp)
