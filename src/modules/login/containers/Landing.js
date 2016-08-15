import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {connect} from 'react-redux'
import Landing from '../components/Landing'

class LandingContainer extends React.Component {
  static propTypes = {
    nav: React.PropTypes.object,
    auth: React.PropTypes.object,
  }

  render() {
    return (
      <Landing {...this.props} />
    )
  }

}

export default connect(state => _.pick(state, 'auth'))(LandingContainer)
