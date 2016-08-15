import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {View} from 'react-native'
import LinkButton from '../../ui/components/LinkButton'
import Text from '../../ui/components/Text'
import FacebookLogin from '../containers/FacebookLogin'
import appStyles from '../../ui/styles/app'
import landingStyles from '../../ui/styles/landing'
import textStyles from '../../ui/styles/text'

export default class Landing extends React.Component {

  render() {
    const {nav} = this.props

    return (
      <View style={appStyles.container}>

        <View style={landingStyles.header}>
          <Text style={[textStyles.h1, textStyles.darkGray]}>FounderLab_replaceme</Text>
        </View>

        <View style={landingStyles.inputs}>

          <View style={landingStyles.facebookButtonContainer}>
            <FacebookLogin {...this.props} />
          </View>

          <LinkButton nav={nav} to="/register" textStyle={[landingStyles.registerButton, textStyles.darkGray]}>
            Register with email
          </LinkButton>

          <LinkButton nav={nav} to="/login" textStyle={[landingStyles.loginButton, textStyles.darkGray]}>
            Already have an account? Sign in
          </LinkButton>

        </View>
      </View>
    )
  }
}

Landing.propTypes = {
  nav: React.PropTypes.object.isRequired,
}
