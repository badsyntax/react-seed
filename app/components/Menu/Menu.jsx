// Filename: Menu.jsx

import './_Menu.scss';
import React from 'react';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  state = {
    foo: false
  }

  renderItem(item) {
    return (
      <li key={'menu-item-' + item.id}>{item.label}</li>
    );
  }

  render() {
    return (
      <ul className={'menu'}>
        {this.props.items.map(this.renderItem, this)}
      </ul>
    );
  }
}
