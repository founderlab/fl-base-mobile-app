import _ from 'lodash'

export function errorsFilter(state) {return state.merge({errors: {}})}

export default (engine, filters={}) => {
  return {
    ...engine,

    save(state) {
      const save_state = {}
      _.forEach(state, (value, key) => {
        save_state[key] = filters[key] ? filters[key](state[key]) : state[key]
      })
      return engine.save(save_state)
    },
  }
}
