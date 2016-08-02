import React from 'react'
import Home from '../components/Home'

export default class HomeContainer extends React.Component {

  render() {
    return (
      <Home {...this.props} />
    )
  }

}

HomeContainer.propTypes = {
  nav: React.PropTypes.object,
}
