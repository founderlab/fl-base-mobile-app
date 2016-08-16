import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {register} from 'fl-auth-redux'

import {loadActiveProfile} from '../actions'
import LoginForm from '../components/LoginForm'
import router from '../../routing'

class RegisterContainer extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object,
    config: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    register: React.PropTypes.func.isRequired,
    loadActiveProfile: React.PropTypes.func.isRequired,
  }

  handleRegister = data => {
    this.props.register(`${this.props.config.get('url')}/register`, data, err => {
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
    const errorMsg = auth.get('errors').get('register')
    const loading = auth.get('loading')

    return (
      <LoginForm
        registerMode
        onSubmit={this.handleRegister}
        errorMsg={(errorMsg && !_.isString(errorMsg)) ? errorMsg.toString() : errorMsg}
        loading={loading}
        {...this.props}
      />
    )
  }
}

export default connect(state => _.pick(state, 'auth', 'config'), {register, loadActiveProfile})(RegisterContainer)
