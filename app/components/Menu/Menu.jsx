'use strict';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem.jsx';

class Menu extends React.Component {

  getMenuItem(item) {
    return (
      <MenuItem
        item={item}
        _onSelect={this.props._onSelect}
        _onDeSelect={this.props._onDeSelect}
        key={'menu-item-' + item.id} />
    );
  }

  render() {
    return (
      <ul className={'menu'}>
        {this.props.items.map(this.getMenuItem, this)}
      </ul>
    );
  }
}

Menu.propTypes =  {
  items: React.PropTypes.array.isRequired,
  _onSelect: React.PropTypes.func.isRequired,
  _onDeSelect: React.PropTypes.func.isRequired
};

export default Menu;
