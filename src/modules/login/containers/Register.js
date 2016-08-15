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

  constructor() {
    super()
    this.state = {}
  }

  handleRegister = data => {
    this.setState({loading: true})
    this.props.register(`${this.props.config.get('url')}/register`, data, err => {
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
    const errorMsg = auth.get('errors').get('register')
    // if (errorMsg && process.env.NODE_ENV === 'production') errorMsg = 'Bummer. Something went wrong'

    return (
      <LoginForm
        registerMode
        onSubmit={this.handleRegister}
        errorMsg={errorMsg}
        loading={this.state.loading}
        {...this.props}
      />
    )
  }
}

export default connect(state => _.pick(state, 'auth', 'config'), {register, loadActiveProfile})(RegisterContainer)
