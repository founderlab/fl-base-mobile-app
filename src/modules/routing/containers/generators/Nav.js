import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {
  Navigator,
  StyleSheet,
} from 'react-native'
import {connect} from 'react-redux'
import Drawer from 'react-native-drawer'
import router from '../../index'
import createNavBarRouteMapper from '../../components/NavBarRouteMapper'
import navbarStyles from '../../../ui/styles/navbar'
import DrawerMenu from '../../../app/components/DrawerMenu'
import Notifications from '../../../app/containers/Notifications'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

// const _navigator = null
// todo: android back
// import configureBack from './lib/back'
// configureBack(_navigator)

export default function createNavContainer(store) {

  class NavContainer extends React.Component {

    static propTypes = {
      auth: React.PropTypes.object,
      config: React.PropTypes.object.isRequired,
    }

    handleDrawerToggle = () => {
      this.refs.drawer.toggle()
    }

    drawIsOpen = () => this.refs.drawer && this.refs.drawer._open;

    routeToComponent = (route, nav) => {
      if (route.Component) {
        // console.log('getting data', !!route.Component.fetchData, route.name)
        if (route.Component.fetchData) setTimeout(() => route.Component.fetchData(store), 0)
        return React.createElement(route.Component, Object.assign({}, route.props, {
          nav,
          onDrawerToggle: this.handleDrawerToggle,
        }))
      }
    }

    navPushFromDrawer = (route) => {
      this.refs.nav.push(route)
      this.refs.drawer.close()
    }

    render() {
      const initialRoute = this.props.auth.get('user') ? 'menu' : 'home'
      console.log('initialRoute', initialRoute, this.props.auth.toJSON())

      return (
        <Drawer
          ref="drawer"
          type="static"
          content={<DrawerMenu nav={{push: this.navPushFromDrawer}} {...this.props} />}
          openDrawerOffset={100}
          styles={{main: {shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3}}}
          tweenHandler={Drawer.tweenPresets.parallax}
          tapToClose
        >
          <Navigator
            ref="nav"
            style={styles.container}
            initialRoute={router.get(initialRoute)}
            renderScene={this.routeToComponent}
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={createNavBarRouteMapper({drawIsOpen: this.drawIsOpen, onDrawerToggle: this.handleDrawerToggle})}
                style={navbarStyles.navbar}
              />
            }
          />
          <Notifications />
        </Drawer>
      )
    }
  }

  return connect(state => _.pick(state, 'auth', 'config'))(NavContainer)
}
