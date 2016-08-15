import _ from 'lodash' // eslint-disable-line
import React from 'react'
import BottomMenu from '../components/BottomMenu'

export default class BottomMenuContainer extends React.Component {
  render() {
    return (
      <BottomMenu {...this.props}/>
    )
  }
}
