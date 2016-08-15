import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import combineStyles from '../../../lib/combineStyles'
import FLText from './Text'
import buttonStyles from '../styles/button'
import router from '../../routing'

export default class LinkButton extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,

    to: React.PropTypes.string,
    nav: React.PropTypes.object,
    onPress: React.PropTypes.func,

    loading: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    reset: React.PropTypes.bool,

    style: Text.propTypes.style,
    textStyle: Text.propTypes.style,
    loaderProps: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
  }

  onPress = event => {
    if (this.props.disabled) {
      event.preventDefault()
      return
    }

    if (this.props.children.props && this.props.children.props.onPress) {
      this.props.children.props.onPress(event)
    }

    if (this.props.reset) {
      this.props.nav.resetTo(router.get(this.props.to))
    }
    else {
      this.props.nav.push(router.get(this.props.to))
    }
  }

  render() {
    const touchableProps = {
      onPress: this.props.onPress || this.onPress,
      activeOpacity: 0.8,
      style: combineStyles(this.props.style),
    }
    let textStyle = this.props.textStyle

    if (this.props.loading || this.props.disabled) {
      touchableProps.onPress = null
      touchableProps.activeOpacity = 1
      const disabledStyle = this.props.disabledStyle || buttonStyles.disabled
      textStyle = combineStyles(textStyle, disabledStyle)
    }

    let children = this.props.children
    if (!React.isValidElement(children) && !_.isArray(children)) {
      children = (<FLText style={textStyle}>{children}</FLText>)
    }

    const loaderProps = _.defaults(this.props.loaderProps || {}, {
      color: '#666',
      style: buttonStyles.loader,
    })

    return (
      <TouchableOpacity {...touchableProps}>
        {children}
        {this.props.loading && (<ActivityIndicator {...loaderProps} />)}
      </TouchableOpacity>
    )
  }

}
