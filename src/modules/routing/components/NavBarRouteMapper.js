import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import navbarStyles from '../../ui/styles/navbar'


export default function createNavBarRouteMapper({onDrawerToggle}) {

  return {
    LeftButton: (route, navigator, index, nav_state) => {

      if (route.path === '/') {
        return (
          <TouchableOpacity onPress={onDrawerToggle} style={navbarStyles.navbarLeftButton}>
            <Icon name="bars" size={30} color="#333" />
          </TouchableOpacity>
        )
      }

      else if (index === 0) return null

      const prev_route = nav_state.routeStack[index - 1]
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={navbarStyles.navbarLeftButton}
        >
          <Text style={[navbarStyles.navbarText, navbarStyles.navbarButtonText]}>
            <Icon name="chevron-left" size={14} color="#333" />
            {prev_route.name || 'back'}
          </Text>
        </TouchableOpacity>
      )
    },

    RightButton: () => null,
    // RightButton: (route, navigator) => {
      // return (
      //   <TouchableOpacity
      //     onPress={() => navigator.push(newRandomRoute())}
      //     style={navbarStyles.navbarRightButton}>
      //     <Text style={[navbarStyles.navbarText, navbarStyles.navbarButtonText]}>
      //       Next
      //     </Text>
      //   </TouchableOpacity>
      // )
    // },

    Title: (route, navigator, index) => { //eslint-disable-line
      return (
        <Text style={[navbarStyles.navbarText, navbarStyles.navbarTitleText]}>
          {route.name}
        </Text>
      )
    },

  }
}
