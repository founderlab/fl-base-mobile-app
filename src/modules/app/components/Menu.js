import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import LinkButton from '../../ui/components/LinkButton'

import appStyles from '../../ui/styles/app'
import menuStyles from '../../ui/styles/menu'

export default class Menu extends React.Component {

  static propTypes = {
    nav: React.PropTypes.object.isRequired,
    categories: React.PropTypes.array.isRequired,
    profile: React.PropTypes.object.isRequired,
  }

  render() {
    const {nav} = this.props

    return (
      <View style={appStyles.container}>

        <View style={menuStyles.container}>
          <LinkButton to="/book" nav={nav}>
            <Icon name="cog" size={30} color="#dadada" />
          </LinkButton>
        </View>


        <View style={menuStyles.settingsIcon}>
          <LinkButton to="/settings" nav={nav}>
            <Icon name="cog" size={30} color="#dadada" />
          </LinkButton>
        </View>

      </View>
    )
  }
}
