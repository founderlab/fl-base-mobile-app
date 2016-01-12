import _ from 'lodash'
import React from 'react-native'
import {connect} from 'react-redux/native'
import {login} from 'fl-auth-redux'

import Login from '../components/Login'
import router from '../../../routing'

class LoginContainer extends React.Component {

  // componentWillReceiveProps() {
  //   if (this.props.auth.get('email')) this.props.nav.push({route: 'home'})
  // }

  onLogin = data => {
    console.log('dispatching', login, data)
    this.props.login(`${this.props.config.get('url')}/login`, data.email, data.password, (err) => {
      console.log('req done', err)
      if (!err) this.props.nav.push(router.get('menu'))
    })
  };

  render() {
    const {auth} = this.props
    return (
      <Login onSubmit={this.onLogin} auth={auth} />
    )
  }
}

LoginContainer.propTypes = {
  auth: React.PropTypes.object,
  config: React.PropTypes.object.isRequired,
  nav: React.PropTypes.object.isRequired,
  login: React.PropTypes.func.isRequired,
}

export default connect(state => _.pick(state, 'auth', 'config'), {login})(LoginContainer)
