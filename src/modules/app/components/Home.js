import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {
  Text,
  View,
} from 'react-native'

import layoutStyles from '../../ui/styles/layout'
import typographyStyles from '../../ui/styles/typography'
import formStyles from '../../ui/styles/form'
import buttonStyles from '../../ui/styles/button'
import Button from '../../ui/components/Button'
import Link from '../../ui/components/Link'

import RegisterOptions from '../../login/components/RegisterOptions'

export default class Home extends React.Component {


  render() {
    const {nav} = this.props

    return (
      <View style={layoutStyles.container}>
        <RegisterOptions {...this.props} />
      </View>
    )
  }
}

Home.propTypes = {
  nav: React.PropTypes.object.isRequired,
}

        // <Button onPress={this.handleFacebook} style={buttonStyles.button}>
        //   Login with Facebook
        // </Button>
