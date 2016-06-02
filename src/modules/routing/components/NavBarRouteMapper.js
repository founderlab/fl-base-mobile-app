import _ from 'lodash' // eslint-disable-line
import React, {
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import navbar_styles from '../../ui/styles/navbar'


export default function createNavBarRouteMapper({onDrawerToggle}) {

  return {
    LeftButton: (route, navigator, index, nav_state) => {

      if (route.path === '/') {
        return (
          <TouchableOpacity onPress={onDrawerToggle} style={navbar_styles.navbarLeftButton}>
            <Icon name="bars" size={30} color="#333" />
          </TouchableOpacity>
        )
      }

      else if (index === 0) return null

      const prev_route = nav_state.routeStack[index - 1]
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={navbar_styles.navbarLeftButton}
        >
          <Text style={[navbar_styles.navbarText, navbar_styles.navbarButtonText]}>
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
      //     style={navbar_styles.navbarRightButton}>
      //     <Text style={[navbar_styles.navbarText, navbar_styles.navbarButtonText]}>
      //       Next
      //     </Text>
      //   </TouchableOpacity>
      // )
    // },

    Title: (route, navigator, index) => { //eslint-disable-line
      return (
        <Text style={[navbar_styles.navbarText, navbar_styles.navbarTitleText]}>
          {route.name}
        </Text>
      )
    },

  }
}
