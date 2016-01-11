import _ from 'lodash'
import React from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'
import {actions as auth_actions} from 'fl-auth-redux'

import Login from '../components/Login'
import router from '../../../routing'

class LoginContainer extends React.Component {

  // componentWillReceiveProps() {
  //   if (this.props.auth.get('email')) this.props.nav.push({route: 'home'})
  // }

  onLogin = data => {
    console.log('dispatching', auth_actions.login, data)
    this.props.dispatch(auth_actions.login(`${this.props.config.get('url')}/login`, data.email, data.password, (err) => {
      console.log('req done', err)
      if (!err) this.props.nav.push(router.get('landing'))
    }))
  };

  render() {
    const {auth, dispatch} = this.props
    return (
      <Login onSubmit={this.onLogin} auth={auth} {...bindActionCreators(auth_actions, dispatch)} />
    )
  }
}

LoginContainer.propTypes = {
  auth: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  config: React.PropTypes.object.isRequired,
  nav: React.PropTypes.object.isRequired,
}

export default connect(state => _.pick(state, 'auth', 'config'))(LoginContainer)
