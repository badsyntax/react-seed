'use strict';

import React from 'react';

let { PropTypes } = React;

class SelectedItem extends React.Component {
  render() {
    return (
      <li className={'selected-item'}>
        {this.props.item.label}
      </li>
    );
  }
}

SelectedItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SelectedItem;
