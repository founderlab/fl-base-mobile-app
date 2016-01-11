import React, {
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import router from './index'

// const _navigator = null
// todo: android back
// import configureBack from './lib/back'
// configureBack(_navigator)

import navbar_styles from '../modules/ui/styles/navbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

const NavigationBarRouteMapper = {

  LeftButton: (route, navigator, index, nav_state) => {
    if (index === 0) {
      return null
    }

    const previousRoute = nav_state.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={navbar_styles.navBarLeftButton}>
        <Text style={[navbar_styles.navBarText, navbar_styles.navBarButtonText]}>
          {previousRoute.title || 'back'}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton: (route, navigator) => {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={navbar_styles.navBarRightButton}>
        <Text style={[navbar_styles.navBarText, navbar_styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    )
  },

  Title: (route, navigator, index) => {
    return (
      <Text style={[navbar_styles.navBarText, navbar_styles.navBarTitleText]}>
        {route.title} [{index}]
      </Text>
    )
  },

}

function RouteMapper(route, nav) {
  console.trace('routing')
  console.log('route', route)
  if (route.component) {
    return React.createElement(route.component, Object.assign({}, route.props, {
      nav,
    }))
  }
}

export default class Nav extends React.Component {
  render() {
    console.log('router', router)
    console.log('router.landing', router.get('landing'))
    return (
      <Navigator
        style={styles.container}
        initialRoute={router.get('landing')}
        renderScene={RouteMapper}

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={navbar_styles.navBar}
          />
        }
      />
    )
  }
}
