'use strict';

import './_Menu.scss';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

var { PropTypes } = React;

class Menu extends React.Component {

  getMenuItem(item) {
    return (
      <MenuItem
        item={item}
        onSelect={this.props.onSelect}
        onDeselect={this.props.onDeselect}
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
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired
};

export default Menu;
