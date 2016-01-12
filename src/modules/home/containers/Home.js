import React from 'react-native'
import Home from '../components/Home'

export default class HomeContainer extends React.Component {

  render() {
    return (
      <Home nav={this.props.nav} />
    )
  }

}

HomeContainer.propTypes = {
  nav: React.PropTypes.object,
}
