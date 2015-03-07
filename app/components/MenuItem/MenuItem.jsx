'use strict';

import './_MenuItem.scss';

import React from 'react';
import classnames from 'classnames';

var { PropTypes } = React;

class MenuItem extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      isSelected: false
    };
  }

  handleClick(e) {
    console.log('You clicked on: %s', this.props.item.label);
    this.toggleSelected();
    this.props[
      this.isSelected() ? 'onDeselect' : 'onSelect'
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

MenuItem.propTypes =  {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired
};

export default MenuItem;
