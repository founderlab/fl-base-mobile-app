import _ from 'lodash'
import {createMiddleware, createLoader, reducer} from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import filter from 'redux-storage-decorator-filter'
import immutablejs from 'redux-storage-decorator-immutablejs'
import debounce from 'redux-storage-decorator-debounce'
import combineFilters from './combineFilters'
import {TYPES} from '../modules/routing/actions'

const storageKeys = ['app', 'auth']
const loadedFilter = state => state.merge({loaded: false})
const errorsFilter = state => state.merge({errors: {}})

const engine = debounce(immutablejs(
  combineFilters(
    filter(createEngine('app_state'), storageKeys),
    {app: loadedFilter, auth: errorsFilter}
  ),
  storageKeys
), 1500)

export const storageMiddleware = createMiddleware(engine, _.values(TYPES))
export const loadStorage = createLoader(engine)
export const storageReducer = reducer
