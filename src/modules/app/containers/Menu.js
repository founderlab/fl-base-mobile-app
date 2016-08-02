import React from 'react'
import Menu from '../components/Menu'

export default class MenuContainer extends React.Component {

  render() {
    return (
      <Menu {...this.props} />
    )
  }

}

MenuContainer.propTypes = {
  nav: React.PropTypes.object,
}
