import _ from 'lodash' // eslint-disable-line
import Queue from 'queue-async'
import React from 'react'
import {connect} from 'react-redux'
import {AccessToken} from 'react-native-fbsdk'
import {logout} from 'fl-auth-redux'
import router from '../../routing'
import Splash from '../components/Splash'
import {appLoaded} from '../actions'
import {facebookLogin, loadActiveProfile} from '../../login/actions'

const VERBOSE = true
// const VERBOSE = false
const log = (...args) => VERBOSE && console.log('[Splash] ', ...args)

class SplashContainer extends React.Component {

  static propTypes = {
    nav: React.PropTypes.object,
    auth: React.PropTypes.object,
  }

  // This is called each time the app loads. We check here if we have a current user
  static fetchData({store, route, nav}, callback) {
    const {auth} = store.getState()

    log('Splash auth check starting', store.getState().app.toJSON(), auth.toJSON())

    const queue = new Queue(1)

    // If there's no user saved, see if there's a Facebook session
    if (!auth.get('user')) {
      queue.defer(callback => {
        log('Checking facebook token')
        AccessToken.getCurrentAccessToken().then(accessToken => {

          // Yup, we're still logged in with Facebook
          if (accessToken) {
            log('Facebook token present, getting FounderLab_replaceme access token')
            return store.dispatch(facebookLogin({accessToken}, err => {
              if (err) log('facebookLogin error: ', err)
              log('Logged in with FounderLab_replaceme')
              callback()
            }))
          }

          log('No facebook access token')
          // If accessToken is null we don't have a session,
          // flag the app as loaded and it'll redirect to the register page
          store.dispatch(appLoaded())
          callback()

        }, err => {
          log('Error retrieving Facebook access token', err)
          // Something went wrong, we'll go to the register page
          store.dispatch(appLoaded())
          callback()
        })
      })
    }

    // Make sure we have a loaded profile & shortlist if we have a user
    queue.defer(callback => {
      const {auth} = store.getState()
      const userIm = auth.get('user')
      const q = new Queue()
      log('Checking profile', auth.get('profile'))

      if (userIm) {
        const userId = userIm && userIm.get('id')
        if (!auth.get('profile')) {
          log('Loading profile', userId)
          q.defer(callback => store.dispatch(loadActiveProfile({user_id: userId}, callback)))
        }
      }
      else {
        // Make sure we're all logged out if we don't have a user
        store.dispatch(logout())
      }

      q.await(callback)
    })

    queue.await(err => {
      if (err) log('Error initialising auth:', err)
      if (!err && store.getState().auth.get('user')) {
        nav.resetTo(router.get('/menu'))
      }
      else {
        nav.resetTo(router.get('/landing'))
      }
      callback()
    })
  }

  render() {
    return (
      <Splash {...this.props} />
    )
  }

}

export default connect(state => _.pick(state, 'app', 'auth'))(SplashContainer)
