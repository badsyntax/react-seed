'use strict';

import React from 'react';

class MenuItem extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      isSelected: false
    };
  }

  _onClick(e) {
    this.toggleSelected();
    this.props[
      this.isSelected() ? '_onDeSelect' : '_onSelect'
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
    var className = ['menu-item'];
    if (this.isSelected()) {
      className.push('--selected');
    }
    return className.join(' ');
  }

  render() {
    return (
      <li className={this.getClassName()} onClick={this._onClick.bind(this)}>
        {this.props.item.label}
      </li>
    );
  }
}

MenuItem.propTypes =  {
  item: React.PropTypes.object.isRequired,
  _onSelect: React.PropTypes.func.isRequired,
  _onDeSelect: React.PropTypes.func.isRequired
};

export default MenuItem;
