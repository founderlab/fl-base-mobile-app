import Router from './Router'
import Home from '../modules/home/containers/Home'
import Login from '../modules/login/containers/Login'

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
  ],
})
