import React from 'react'
import {View} from 'react-native'
import LinkButton from '../../ui/components/LinkButton'
import Text from '../../ui/components/Text'

import appStyles from '../../ui/styles/app'
import menuStyles from '../../ui/styles/menu'
import textStyles from '../../ui/styles/text'

export default class Settings extends React.Component {

  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
  }

  render() {
    const {onLogout} = this.props

    return (
      <View style={appStyles.container}>

        <View style={[menuStyles.container, {marginTop: 80}]}>
          <Text style={[textStyles.h1, textStyles.darkGray]}>Settings</Text>
        </View>

        <View style={menuStyles.buttonsContainer}>

          <LinkButton onPress={onLogout} icon="sign-out" styleClass="clubs">
            Sign out
          </LinkButton>
        </View>

      </View>
    )
  }
}

