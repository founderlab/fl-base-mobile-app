import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {View, Image} from 'react-native'
import appStyles from '../../ui/styles/app'

export default class Background extends React.Component {

  static propTypes = {
     // expects either an image file or a source object, the require() call from the former may be a number
    source: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object,
    ]).isRequired,
  }

  static defaultProps = {
    source: {uri: 'http://i.imgur.com/xlQ56UK.jpg'},
  }

  render() {
    return (
      <View style={appStyles.fullScreen}>
        <Image style={appStyles.fullScreen} {...this.props}/>
        <View style={[appStyles.fullScreen, appStyles.bgOverlay]} />
      </View>
    )
  }
}
