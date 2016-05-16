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

import navbarStyles from '../modules/ui/styles/navbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

const NavigationBarRouteMapper = {

  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null
    }

    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={navbarStyles.navBarLeftButton}>
        <Text style={[navbarStyles.navBarText, navbarStyles.navBarButtonText]}>
          {previousRoute.name || 'back'}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton: (route, navigator) => {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={navbarStyles.navBarRightButton}>
        <Text style={[navbarStyles.navBarText, navbarStyles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    )
  },

  Title: (route, navigator, index) => {
    return (
      <Text style={[navbarStyles.navBarText, navbarStyles.navBarTitleText]}>
        {route.name} [{index}]
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
    return (
      <Navigator
        style={styles.container}
        initialRoute={router.get('home')}
        renderScene={RouteMapper}

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={navbarStyles.navBar}
          />
        }
      />
    )
  }
}
