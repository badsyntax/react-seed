'use strict';

import './_MenuItem.scss';

import React from 'react';
import classnames from 'classnames';
import AppActions from '../../actions/AppActions';

let { PropTypes } = React;

class MenuItem extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      isSelected: false
    };
  }

  handleClick() {
    this.toggleSelected();
    AppActions[
      this.isSelected() ? 'deSelectItem' : 'selectItem'
    ](this.props.item);
  }

  toggleSelected() {
    this.setState({
      isSelected: !this.state.isSelected
    });
  }

  isSelected() {
    return this.state.isSelected;
  }

  getClassName() {
    return classnames({
      'menu-item': true,
      '-selected': this.isSelected()
    });
  }

  render() {
    return (
      <li className={this.getClassName()} onClick={this.handleClick.bind(this)}>
       {this.props.item.label}
      </li>
    );
  }
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default MenuItem;
