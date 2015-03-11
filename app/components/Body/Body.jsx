'use strict';

import './_Body.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import Menu from '../Menu/Menu';
import SelectedList from '../SelectedList/SelectedList';

var { PropTypes } = React;

class Body extends React.Component {

  handleMenuSelect(item) {
    AppActions.selectItem(item);
  }

  handleMenuDeselect(item) {
    AppActions.deSelectItem(item);
  }

  getMenu() {
    return (
      <Menu
        items={this.props.items}
        onSelect={this.handleMenuSelect}
        onDeselect={this.handleMenuDeselect} />
    );
  }

  getSelectedList() {
    return (
      <SelectedList
        items={this.props.selectedItems} />
    );
  }

  render() {
    return (
      <div className={'body'}>
        <h1>Example of React with ES6 and webpack</h1>
        <p><em>Click on a menu item to toggle:</em></p>
        {this.getMenu()}
        <p>Your selections:</p>
        {this.getSelectedList()}
      </div>
    );
  }
}

Body.propTypes =  {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired
};

export default Body;
