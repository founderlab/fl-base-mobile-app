import _ from 'lodash'
import Queue from 'queue-async'
import React from 'react'
import {AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk'
import {connect} from 'react-redux'
import {logout} from 'fl-auth-redux'
import {facebookLogin, startLoading} from '../actions'
import FacebookLogin from '../components/FacebookLogin'
import router from '../../routing'

class FacebookLoginContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object,
    nav: React.PropTypes.object.isRequired,
    facebookLogin: React.PropTypes.func.isRequired,
    startLoading: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
  }

  handleFacebookLogin = (err, res) => {
    if (err || res.isCancelled) {
      return console.log('handleFacebookLogin error or res.isCancelled:', err, res)
    }

    this.props.startLoading()
    const queue = new Queue()
    const registerData = {}

    queue.defer(callback => {
      AccessToken.getCurrentAccessToken().then(accessToken => {
        callback(null, registerData.accessToken = accessToken)
      }, err => {
        console.log('AccessToken.getCurrentAccessToken rejected, err:', err)
        callback(err)
      })
    })

    queue.defer(callback => {
      const infoRequest = new GraphRequest('/me', null, (err, profile) => {
        registerData.profile = profile
        callback()
      })

      new GraphRequestManager().addRequest(infoRequest).start()
    })

    queue.await(err => {
      if (err) return console.log(err)
      this.props.facebookLogin(registerData, err => {
        if (err) return console.log(err)
        this.props.nav.resetTo(router.get('/splash'))
      })
    })
  }

  handleFacebookLogout = (err, res) => {
    console.log('handleFacebookLogout', err, res)
    this.props.logout()
  }

  render() {
    return (
      <FacebookLogin
        onFacebookLogin={this.handleFacebookLogin}
        onFacebookLogout={this.handleFacebookLogout}
        {...this.props}
      />
    )
  }
}

export default connect(state => _.pick(state, 'auth'), {facebookLogin, startLoading, logout})(FacebookLoginContainer)
