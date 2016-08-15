
export const TYPES = {
  ROUTE: 'ROUTE',
  ROUTE_RESET_TO: 'ROUTE_RESET_TO',
  ROUTE_PUSH: 'ROUTE_PUSH',
  ROUTE_POP: 'ROUTE_POP',
}

export function routeChange(route) {
  return {route, type: 'ROUTE'}
}

export function resetTo(route) {
  return {route, type: 'ROUTE_RESET_TO'}
}

export function push(route) {
  return {route, type: 'ROUTE_PUSH'}
}

export function pop() {
  return {type: 'ROUTE_POP'}
}
