import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinkButton from '../../ui/components/LinkButton'
import bottomMenuStyles from '../../ui/styles/bottomMenu'

export default class BottomMenu extends React.Component {

  static propTypes = {
    nav: React.PropTypes.object.isRequired,
    path: React.PropTypes.string.isRequired,
  }

  // The button will be active if the current full path starts with the links path
  // e.g. /menu matches /menu/bar
  renderLink = (path, icon) => {
    const fullPath = this.props.path
    const active = !!fullPath.match(new RegExp(`^${path}`))
    const styles = [bottomMenuStyles.bottomMenuLink]
    if (active) styles.push(bottomMenuStyles.bottomMenuLinkActive)

    return (
      <View style={styles}>
        <LinkButton style={[bottomMenuStyles.bottomMenuLinkIcon]} to={path} disabled={active} nav={this.props.nav} reset>
          <Icon name={icon} size={26} color={active ? '#63C3E7' : '#333'} />
        </LinkButton>
      </View>
    )
  }

  render() {
    return (
      <View style={bottomMenuStyles.bottomMenu}>
        {this.renderLink('/menu', 'search')}
        {this.renderLink('/shortlist', 'star-o')}
        {this.renderLink('/friends', 'users')}
      </View>
    )
  }
}
