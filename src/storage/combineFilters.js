import _ from 'lodash'

export default (engine, filters={}) => {
  return {
    ...engine,

    save(state) {
      const saveState = {}
      _.forEach(state, (value, key) => {
        saveState[key] = filters[key] ? filters[key](state[key]) : state[key]
      })
      return engine.save(saveState)
    },
  }
}
