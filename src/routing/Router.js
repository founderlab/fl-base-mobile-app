import _ from 'lodash'

export default class Router {
  constructor(options) {
    this.routes = options.routes || []
    this.by_path = {}
    this.by_name = {}
    this.routes.forEach(route => this.register(route))
  }

  register(route) {
    if (!route.name) console.log('Route missing name: ', route)
    else this.by_name[route.name] = route
    if (!route.path) console.log('Route missing path: ', route)
    else this.by_path[route.path] = route
  }

  get(name, ...args) {
    const route = this.by_name[name]
    if (!route) throw new Error(`Route not found with name: ${name}`)
    if (_.isFunction(route)) return route(...args)
    return route
  }

  getByPath(path, ...args) {
    const route = this.by_path[path]
    if (!route) throw new Error(`Route not found with path: ${path}`)
    if (_.isFunction(route)) return route(...args)
    return route
  }

}
