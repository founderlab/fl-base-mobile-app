import React, {
  Text,
  TouchableOpacity,
} from 'react-native'
import isArray from 'lodash/lang/isArray'
import router from '../../../routing'

export default class Link extends React.Component {

  onPress = (event) => {
    if (this.props.disabled) {
      event.preventDefault()
      return
    }

    if (this.props.children.props && this.props.children.props.onPress) {
      this.props.children.props.onPress(event)
    }

    this.props.nav.push(router.get(this.props.to))
  };

  render() {
    const touchable_props = {
      onPress: this.props.onPress || this.onPress,
      activeOpacity: 0.2,
    }
    const style = [this.props.style]

    if (this.props.disabled) {
      touchable_props.onPress = null
      touchable_props.activeOpacity = 1
      if (this.props.disabled_style) style.push(this.props.disabled_style)
    }

    let children = this.props.children
    children = (React.isValidElement(children) || isArray(children)) ? this.props.children : (<Text style={style}>{children}</Text>)

    return (
      <TouchableOpacity {...touchable_props}>
        {children}
      </TouchableOpacity>
    )
  }

}

Link.propTypes = {
  nav: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  to: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  style: Text.propTypes.style,
  disabled_style: Text.propTypes.style,
}
