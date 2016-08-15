import Router from './Router'

import Splash from '../app/containers/Splash'
import Settings from '../app/containers/Settings'
import Menu from '../app/containers/Menu'

import Landing from '../login/containers/Landing'
import Login from '../login/containers/Login'
import Register from '../login/containers/Register'

export default new Router({
  routes: [
    {
      name: 'Splash',
      path: '/splash',
      Component: Splash,
      // backgroundImage: require('../../../assets/images/bar-chair.jpg'),
    },
    {
      name: 'Settings',
      path: '/settings',
      Component: Settings,
      // backgroundImage: require('../../../assets/images/bar-chair.jpg'),
    },
    {
      name: 'Menu',
      path: '/menu',
      Component: Menu,
      // backgroundImage: require('../../../assets/images/bar-chair.jpg'),
    },

    {
      // hideMenu: true,
      name: 'Landing',
      path: '/landing',
      Component: Landing,
      // backgroundImage: require('../../../assets/images/bar-chair.jpg'),
    },
    {
      // hideMenu: true,
      // showName: true,
      name: 'Sign in',
      path: '/login',
      Component: Login,
      // backgroundImage: require('../../../assets/images/bar-chair.jpg'),
    },
    {
      // hideMenu: true,
      // showName: true,
      name: 'Register',
      path: '/register',
      Component: Register,
      // backgroundImage: require('../../../assets/images/bar-chair.jpg'),
    },
  ],
})
