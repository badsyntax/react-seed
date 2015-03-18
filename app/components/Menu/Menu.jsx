'use strict';

import './_Menu.scss';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

let { PropTypes } = React;

class Menu extends React.Component {

  getMenuItem(item) {
    return (
      <MenuItem
        item={item}
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

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
