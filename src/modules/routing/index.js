import Router from './Router'
import Home from '../app/containers/Home'
import Menu from '../app/containers/Menu'
import Login from '../login/containers/Login'

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      Component: Home,
    },
    {
      name: 'menu',
      path: '/menu',
      Component: Menu,
    },
    {
      name: 'login',
      path: '/login',
      Component: Login,
    },
  ],
})
