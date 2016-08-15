import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {Text} from 'react-native'
import combineStyles from '../../../lib/combineStyles'
import textStyles from '../styles/text'

export default class FLText extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    style: Text.propTypes.style,
  }

  render() {
    const style = combineStyles(textStyles.font, this.props.style)
    return (
      <Text style={style}>
        {this.props.children}
      </Text>
    )
  }
}
