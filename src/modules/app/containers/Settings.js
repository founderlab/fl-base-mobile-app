import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {connect} from 'react-redux'
import {logout} from 'fl-auth-redux'
import Settings from '../components/Settings'
import router from '../../routing'

export default class SettingsContainer extends React.Component {

  handleLogout = () => {
    this.props.logout()
    this.props.nav.jumpTo(router.get('home'))
  };

  render() {
    return (
      <Settings onLogout={this.handleLogout} {...this.props} />
    )
  }

}

SettingsContainer.propTypes = {
  nav: React.PropTypes.object,
  logout: React.PropTypes.func.isRequired,
}

export default connect(state => _.pick(state, 'auth'), {logout})(SettingsContainer)
