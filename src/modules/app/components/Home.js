import React, {
} from 'react-native'

import Menu from './Menu'

export default class Home extends React.Component {
  render() {
    const {nav} = this.props

    return (
      <Menu nav={nav} />
    )
  }
}

Home.propTypes = {
  nav: React.PropTypes.object.isRequired,
}
