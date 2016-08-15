import _ from 'lodash'

export default function combineStyles(...styles) {
  let finalStyles = []
  _.forEach(styles, style => {
    if (style) {
      finalStyles = finalStyles.concat(_.isArray(style) ? style : [style])
    }
  })
  return finalStyles
}
