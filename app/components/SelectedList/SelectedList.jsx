'use strict';

import React from 'react';
import SelectedItem from '../SelectedItem/SelectedItem.jsx';

class SelectedList extends React.Component {
  render() {
    return (
      <ul className={'selected-list'}>
        {this.props.items.map((item) => {
          return (
            <SelectedItem
              item={item}
              key={'selected-item-' + item.id} />
          );
        })}
      </ul>
    );
  }
}

SelectedList.propTypes =  {
  items: React.PropTypes.array.isRequired
};

export default SelectedList;
