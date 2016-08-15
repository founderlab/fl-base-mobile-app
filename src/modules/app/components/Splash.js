import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {Image, View} from 'react-native'
import Text from '../../ui/components/Text'

import appStyles from '../../ui/styles/app'
import landingStyles from '../../ui/styles/landing'
import textStyles from '../../ui/styles/text'

export default class Splash extends React.Component {

  render() {
    return (
      <View style={appStyles.container}>
        <Image style={appStyles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />

        <View style={landingStyles.header}>
          <Text style={[textStyles.h1, textStyles.darkGray]}>FounderLab_replaceme</Text>
          <Text style={[textStyles.h3, textStyles.darkGray]}>loading...</Text>
        </View>

      </View>
    )
  }
}
