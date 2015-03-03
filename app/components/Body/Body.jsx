'use strict';

import React from 'react';
import AppActions from '../../actions/AppActions';
import Menu from '../Menu/Menu.jsx';
import SelectedList from '../SelectedList/SelectedList.jsx';

var { PropTypes } = React;

class Body extends React.Component {

  handleMenuSelect(item) {
    AppActions.selectItem(item);
  }

  handleMenuDeselect(item) {
    AppActions.deSelectItem(item);
  }

  render() {
    return (
      <div className={'body'}>
        <h1>Example of React with es6 and browserify</h1>
        <p><em>Click on a menu item to toggle:</em></p>
        <Menu
          items={this.props.items}
          onSelect={this.handleMenuSelect}
          onDeselect={this.handleMenuDeselect} />
        <p>Your selections:</p>
        <SelectedList
          items={this.props.selectedItems} />
      </div>
    );
  }
}

Body.propTypes =  {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired
};

export default Body;
