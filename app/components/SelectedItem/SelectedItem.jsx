'use strict';

import React from 'react';

class SelectedItem extends React.Component {
  render() {
    return (
      <li className={'selected-item'}>
        {this.props.item.label}
      </li>
    );
  }
}

SelectedItem.propTypes =  {
  item: React.PropTypes.object.isRequired
};

export default SelectedItem;
