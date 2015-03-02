'use strict';

import React from 'react';
import AppActions from '../../actions/AppActions';
import Menu from '../Menu/Menu.jsx';
import SelectedList from '../SelectedList/SelectedList.jsx';

class Body extends React.Component {

  _onMenuSelect(item) {
    AppActions.selectItem(item);
  }

  _onMenuDeSelect(item) {
    AppActions.deSelectItem(item);
  }

  render() {
    return (
      <div className={'body'}>
        <p>Here is a Menu component:</p>
        <p><em>Click on a menu item.</em></p>
        <Menu
          items={this.props.items}
          _onSelect={this._onMenuSelect}
          _onDeSelect={this._onMenuDeSelect} />
        <p>Your selections:</p>
        <SelectedList
          items={this.props.selectedItems} />
      </div>
    );
  }
}

Body.propTypes =  {
  items: React.PropTypes.array.isRequired,
  selectedItems: React.PropTypes.array.isRequired
};

export default Body;
