import _ from 'lodash' // eslint-disable-line
import React from 'react'
import RegisterOptions from '../components/RegisterOptions'

export default class RegisterOptionsContainer extends React.Component {


  render() {
    const {nav} = this.props

    return (
      <RegisterOptions {...this.props} />
    )
  }
}

RegisterOptionsContainer.propTypes = {
  nav: React.PropTypes.object.isRequired,
}

