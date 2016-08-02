import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {View} from 'react-native'

import layoutStyles from '../../ui/styles/layout'
import typographyStyles from '../../ui/styles/typography'
import formStyles from '../../ui/styles/form'
import buttonStyles from '../../ui/styles/button'
import Button from '../../ui/components/Button'
import Link from '../../ui/components/Link'

import FacebookLogin from '../containers/FacebookLogin'

export default class RegisterOptions extends React.Component {


  render() {
    const {nav} = this.props

    return (
      <View style={layoutStyles.container}>
        <FacebookLogin {...this.props} />

        <Link nav={nav} to="login" style={buttonStyles.button}>
          Register with email
        </Link>
        <Link nav={nav} to="login" >
          Already have an account? Sign in
        </Link>
      </View>
    )
  }
}

RegisterOptions.propTypes = {
  nav: React.PropTypes.object.isRequired,
}

