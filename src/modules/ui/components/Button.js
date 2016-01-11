import React, {
  Text,
  TouchableOpacity,
} from 'react-native'
import isArray from 'lodash/lang/isArray'

export default class Button extends React.Component {

  render() {
    const touchable_props = {
      onPress: this.props.onPress,
      activeOpacity: 0.2,
      // style: this.props.style,
    }
    const style = [this.props.style]

    if (this.props.disabled) {
      touchable_props.onPress = null
      touchable_props.activeOpacity = 1
      if (this.props.disabled_style) style.push(this.props.disabled_style)
    }

    let children = this.props.children || []
    children = (React.isValidElement(children) || isArray(children)) ? this.props.children : (<Text style={style}>{children}</Text>)

    return (
      <TouchableOpacity {...touchable_props}>
        {children}
      </TouchableOpacity>
    )
  }

}

Button.propTypes = {
  onPress: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  style: Text.propTypes.style,
  disabled_style: Text.propTypes.style,
  children: React.PropTypes.node,
}
