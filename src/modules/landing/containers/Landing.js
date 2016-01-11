import React from 'react-native'
import router from '../../../routing'
import Landing from '../components/Landing'

export default class LandingContainer extends React.Component {

  handleLogin = () => {
    this.props.nav.push(router.get('login'))
  };

  render() {
    return (
      <Landing onLogin={this.handleLogin} />
    )
  }
}

LandingContainer.propTypes = {
  nav: React.PropTypes.object,
}
