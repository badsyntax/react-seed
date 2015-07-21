import React from 'react';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    return (
      <li key={'menu-item-' + this.props.item.id}>{this.props.item.label}</li>
    );
  }
}
