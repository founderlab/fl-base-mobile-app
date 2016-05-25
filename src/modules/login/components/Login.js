import React from 'react'
import LoginForm from './LoginForm'

export default class Login extends React.Component {

  render() {
    const {onSubmit, auth} = this.props

    return (
      <LoginForm onSubmit={onSubmit} auth={auth} />
    )
  }
}

Login.propTypes = {
  auth: React.PropTypes.object,
  onSubmit: React.PropTypes.func.isRequired,
}
