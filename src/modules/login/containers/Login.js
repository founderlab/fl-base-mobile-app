import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {login} from 'fl-auth-redux'

import {loadActiveProfile} from '../actions'
import LoginForm from '../components/LoginForm'
import router from '../../routing'

class LoginContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object,
    config: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    login: React.PropTypes.func.isRequired,
    loadActiveProfile: React.PropTypes.func.isRequired,
  }

  handleLogin = data => {
    this.props.login(`${this.props.config.get('url')}/login`, data.email, data.password, err => {
      this.setState({loading: false})
      if (err) return console.log(err)
      const userId = this.props.auth.get('user').get('id')

      this.props.loadActiveProfile({user_id: userId}, err => {
        if (err) return console.log(err)

        this.props.nav.resetTo(router.get('/menu'))
      })
    })
  }

  render() {
    const {auth} = this.props
    const errorMsg = auth.get('errors').get('login')

    return (
      <LoginForm
        onSubmit={this.handleLogin}
        onFacebookLogin={this.handleFacebookLogin}
        errorMsg={(errorMsg && !_.isString(errorMsg)) ? errorMsg.toString() : errorMsg}
        {...this.props}
      />
    )
  }
}

export default connect(state => _.pick(state, 'auth', 'config'), {login, loadActiveProfile})(LoginContainer)
