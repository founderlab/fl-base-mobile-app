import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {Navigator, View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import Drawer from 'react-native-drawer'
import router from '../../index'
import createNavbarRouteMapper from '../../components/NavbarRouteMapper'
import DrawerMenu from '../../../app/components/DrawerMenu'
import Background from '../../../app/components/Background'
import Notifications from '../../../app/containers/Notifications'
import {routeChange} from '../../actions'

import appStyles from '../../../ui/styles/app'
import navbarStyles from '../../../ui/styles/navbar'

// const _navigator = null
// todo: android back
// import configureBack from './lib/back'
// configureBack(_navigator)

export default function createNavContainer(store) {

  class NavContainer extends React.Component {

    static propTypes = {
      auth: React.PropTypes.object.isRequired,    // Need to connect this so we rerender when auth changes
      config: React.PropTypes.object.isRequired,
      path: React.PropTypes.string,
    }

    static childContextTypes = {
      s3Url: React.PropTypes.string,
    }

    constructor() {
      super()
      this.state = {}
    }

    getChildContext() {
      return {s3Url: this.state.s3Url}
    }

    componentWillMount() {
      console.log('mounting', this.props.config.get('s3Url'))
      if (!this.state.s3Url) this.setState({s3Url: this.props.config.get('s3Url')})
    }

    getDefaultRoute() {
      return router.get('/splash')
    }

    getCurrentRoute() {
      if (this.refs.nav) {
        return _.last(this.refs.nav.getCurrentRoutes())
      }
      return this.getDefaultRoute()
    }

    push = route => {
      this.refs.nav.push(route)
      this.refs.drawer.close()
    }

    canGoBack() {
      return this.refs.nav && this.refs.nav.getCurrentRoutes().length > 1
    }

    routeToComponent = (route, nav) => {
      const {Component} = route
      if (Component) {
        setTimeout(() => store.dispatch(routeChange(route.path)), 0)

        if (Component.fetchData && !Component.__is_fetching) {
          Component.__is_fetching = true

          setTimeout(() => {
            Component.fetchData({store, route, nav}, err => {
              if (err) console.error(err)
              Component.__is_fetching = false
            })
          }, 0)
        }

        return (
          <Component route={route} nav={nav} {...route.props} />
        )
      }
    }

    render() {
      const route = this.getCurrentRoute()

      return (
        <Drawer
          ref="drawer"
          type="static"
          content={<DrawerMenu nav={{push: this.push}} {...this.props} />}
          openDrawerOffset={100}
          styles={{main: {shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3}}}
          tweenHandler={Drawer.tweenPresets.parallax}
          tapToClose
        >
          <View style={appStyles.container}>
            <StatusBar />
            {route.backgroundImage && <Background source={route.backgroundImage} />}
            <Navigator
              ref="nav"
              initialRoute={this.getDefaultRoute()}
              renderScene={this.routeToComponent}
              navigationBar={
                <Navigator.NavigationBar
                  routeMapper={createNavbarRouteMapper()}
                  style={navbarStyles.navbar}
                />
              }
            />
            <Notifications />
          </View>
        </Drawer>
      )
    }
  }

  return connect(state => _.pick(state, 'auth', 'config'))(NavContainer)
}
