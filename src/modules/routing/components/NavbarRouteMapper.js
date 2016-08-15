import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Text from '../../ui/components/Text'
import navbarStyles from '../../ui/styles/navbar'
import textStyles from '../../ui/styles/text'

export default function createNavbarRouteMapper() {

  return {
    LeftButton: (route, nav, index, navState) => {
      const prevRoute = navState.routeStack[index - 1]
      if (!prevRoute) return null

      return (
        <TouchableOpacity
          onPress={() => nav.pop()}
          style={navbarStyles.container}
        >
          <Icon name="chevron-thin-left" style={[navbarStyles.icon, textStyles.darkGray]} />

          {prevRoute.showName && prevRoute.name && (
            <Text style={[navbarStyles.navbarText, navbarStyles.navbarLeftButton, textStyles.darkGray]}>
              {prevRoute.name}
            </Text>
          )}
        </TouchableOpacity>
      )
    },

    RightButton: () => null,

    Title: (route, nav, index) => { //eslint-disable-line
      return route.showName && route.name && (
        <Text style={[navbarStyles.navbarText, navbarStyles.navbarTitleText]}>
          {route.name}
        </Text>
      )
    },

  }
}


// <Text style={[navbarStyles.navbarText, textStyles.darkGray]}>Back</Text>
