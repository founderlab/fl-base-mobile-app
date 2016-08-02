import _ from 'lodash'
import React from 'react'
import {AccessToken} from 'react-native-fbsdk'
import {connect} from 'react-redux'
import {facebookLogin} from '../actions'
import FacebookLogin from '../components/FacebookLogin'
import router from '../../routing'

class FacebookLoginContainer extends React.Component {

  handleFacebookLogin = (err, res) => {
    console.log('handleFacebookLogin', err, res)

    if (err) {
      return console.log('handleFacebookLogin error:', err)
    }
    else if (res.isCancelled) {
      return console.log('handleFacebookLogin res.isCancelled', err, res)
    }

    AccessToken.getCurrentAccessToken().then(data => {
      console.log('AccessToken got data', data)

      this.props.facebookLogin(data, err => {
        console.log('req done', err)
        if (!err) this.props.nav.push(router.get('menu'))
      })
    }, err => {
      console.log('AccessToken.getCurrentAccessToken rejected, err:', err)
    })
  }

  handleFacebookLogout = (err, res) => {
    console.log('handleFacebookLogout', err, res)
  }

  render() {
    console.log('???')
    // const {auth} = this.props
    // const errors = auth.get('errors').toJSON()

    return (
      <FacebookLogin
        onFacebookLogin={this.handleFacebookLogin}
        onFacebookLogout={this.handleFacebookLogout}
        {...this.props}
      />
    )
  }
}

FacebookLoginContainer.propTypes = {
  auth: React.PropTypes.object,
  config: React.PropTypes.object.isRequired,
  nav: React.PropTypes.object.isRequired,
  facebookLogin: React.PropTypes.func.isRequired,
}

export default connect(state => _.pick(state, 'auth', 'config'), {facebookLogin})(FacebookLoginContainer)
