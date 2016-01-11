import Router from './Router'
import Landing from '../modules/landing/containers/Landing'
import Login from '../modules/login/containers/Login'

export default new Router({
  routes: [
    {
      name: 'landing',
      path: '/',
      component: Landing,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
  ],
})
