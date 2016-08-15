import _ from 'lodash' // eslint-disable-line
import React from 'react'
import {AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {logout} from 'fl-auth-redux'
import {LoginManager} from 'react-native-fbsdk'
import Settings from '../components/Settings'
import router from '../../routing'

class SettingsContainer extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired,
  }


  handleLogout = () => {
    console.log('[logout] clearing storage')
    AsyncStorage.clear()
    this.props.logout()
    this.props.nav.resetTo(router.get('/splash'))
    LoginManager.logOut((err, data) => {
      console.log('FB logout:', err, data)
    })
  }

  render() {

    return (
      <Settings
        onLogout={this.handleLogout}
        {...this.props}
      />
    )
  }

}

export default connect(state => _.pick(state, 'auth'), {logout})(SettingsContainer)

