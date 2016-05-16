import _ from 'lodash'

export default class Router {
  constructor(options) {
    this.routes = options.routes || []
    this.byPath = {}
    this.byName = {}
    this.routes.forEach(route => this.register(route))
  }

  register(route) {
    if (!route.name) console.log('Route missing name: ', route)
    else this.byName[route.name] = route
    if (!route.path) console.log('Route missing path: ', route)
    else this.byPath[route.path] = route
  }

  get(name, ...args) {
    const route = this.byName[name]
    if (!route) throw new Error(`Route not found with name: ${name}`)
    if (_.isFunction(route)) return route(...args)
    return route
  }

  getByPath(path, ...args) {
    const route = this.byPath[path]
    if (!route) throw new Error(`Route not found with path: ${path}`)
    if (_.isFunction(route)) return route(...args)
    return route
  }

}
