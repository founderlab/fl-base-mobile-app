import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {connect} from 'react-redux'
import Menu from '../components/Menu'

class MenuContainer extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <Menu {...this.props} />
    )
  }

}

export default connect(state => _.pick(state, 'auth'))(MenuContainer)
