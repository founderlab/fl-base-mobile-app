import _ from 'lodash' // eslint-disable-line
import React, {AppRegistry} from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux/native'
import {requestMiddleware, responseParserMiddleware} from 'redux-request-middleware'
import createRequestModifier from 'superagent-request-modifier'
import {requestLoggerMiddleware} from 'fl-auth-redux'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage/engines/reactNativeAsyncStorage'

import lostConnectionMiddleware from './lib/lostConnectionMiddleware'
import filter, {errorsFilter} from './lib/storageFilters'
import observeStore from './lib/observeStore'
import config from './config'
import reducer from './reducer'
import createNav from './modules/routing/containers/generators/Nav'

const storage_keys = ['auth']

const engine = storage.decorators.immutablejs(
  filter(
    storage.decorators.filter(createEngine('app_state'), storage_keys),
    {auth: errorsFilter}
  ),
  storage_keys
)
const storageMiddleware = storage.createMiddleware(engine)

const middlewares = applyMiddleware(
  thunk,
  requestLoggerMiddleware,
  requestMiddleware,
  responseParserMiddleware,
  storageMiddleware,
  requestLoggerMiddleware,
  lostConnectionMiddleware,
)
const createStoreWithMiddleware = middlewares(createStore)
const store = createStoreWithMiddleware(storage.reducer(reducer))

const load = storage.createLoader(engine)
load(store)

const request_modifier = createRequestModifier(require('superagent'), {hostname: config.hostname})
observeStore(store, store => store.auth.get('access_token'), access_token => {
  request_modifier.setHeader({authorization: `Bearer ${access_token}`})
  console.log('[AUTH TOKEN SET]', {authorization: `Bearer ${access_token}`})
})

import Backbone from 'backbone'
import createBasicAjax from './lib/createBasicAjax'
Backbone.ajax = createBasicAjax(config)

const Nav = createNav(store)

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
