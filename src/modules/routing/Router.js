import _ from 'lodash'
import namedRegexp from 'named-js-regexp'

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

    if (route.path.indexOf(':') >= 0) {
      const routeParts = route.path.split('/')

      const composedParts = []
      _.forEach(routeParts, part => {
        if (part[0] === ':') {
          const name = part.slice(1, part.length)
          composedParts.push(`(?<${name}>\\w+)`)
        }
        else {
          composedParts.push(part)
        }
      })

      route.re = namedRegexp('^' + composedParts.join('/') + '\/?$')
    }
  }

  _getByPath(path) {
    let matchedRoute = this.byPath[path]
    if (matchedRoute) return matchedRoute

    _.forEach(this.byPath, route => {
      if (!route.re) return

      const match = route.re.execGroups(path)
      if (match) {
        matchedRoute = route
        matchedRoute.params = match
      }
    })

    if (!matchedRoute) {
      console.log('Route not found for path: ', path)
    }

    return matchedRoute
  }

  get(path, ...args) {
    const route = this._getByPath(path)
    if (!route) throw new Error(`Route not found with path: ${path}`)
    if (_.isFunction(route)) return route(...args)
    return route
  }

  getByName(name, ...args) {
    const route = this.byName[name]
    if (!route) throw new Error(`Route not found with name: ${name}`)
    if (_.isFunction(route)) return route(...args)
    return route
  }

}
