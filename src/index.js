import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {AppRegistry} from 'react-native'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import devTools from 'remote-redux-devtools'
import {requestMiddleware, requestLoggerMiddleware, responseParserMiddleware} from 'redux-request-middleware'
import createRequestModifier from 'superagent-request-modifier'
import {observeStore} from 'fl-utils'

import lostConnectionMiddleware from './lib/lostConnectionMiddleware'
import mixpanelMiddleware from './lib/mixpanelMiddleware'
import config from './config'
import reducer from './reducer'
import createNav from './modules/routing/containers/generators/Nav'
import EStyleSheet from 'react-native-extended-stylesheet'
import {storageReducer, loadStorage, storageMiddleware} from './storage'

const store = createStore(storageReducer(reducer), {}, compose(applyMiddleware(
  thunk,
  requestLoggerMiddleware,
  requestMiddleware,
  requestLoggerMiddleware,
  responseParserMiddleware,
  storageMiddleware,
  lostConnectionMiddleware,
  mixpanelMiddleware,
), devTools()))

loadStorage(store)

const requestModifier = createRequestModifier(require('superagent'), {hostname: config.hostname})
observeStore(store, store => store.auth.get('accessToken'), accessToken => {
  const header = {authorization: accessToken ? `Bearer ${accessToken}` : null}
  requestModifier.setHeader(header)
  console.log('[AUTH TOKEN HEADER SET]', header)
})

import Backbone from 'backbone'
import createBackboneAjax from './lib/createBackboneAjax'
Backbone.ajax = createBackboneAjax(config)

const Nav = createNav(store)

class EventureApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}

// calculate styles
EStyleSheet.build()

AppRegistry.registerComponent('FounderLab_replaceme', () => EventureApp)

// Make sure window.location is present so superagent doesn't crash
window.location = {protocol: 'https:'}
