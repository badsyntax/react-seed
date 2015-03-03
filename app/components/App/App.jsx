'use strict';

import React from 'react';
import Body from '../Body/Body.jsx';
import Footer from '../Footer/Footer.jsx';
import ItemsStore from '../../stores/ItemsStore';
import SelectedStore from '../../stores/SelectedStore';

function getAppState() {
  return {
    items: ItemsStore.getAll(),
    selectedItems: SelectedStore.getAll()
  };
}

export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = getAppState();
  }

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange.bind(this));
    SelectedStore.addChangeListener(this.onChange.bind(this));

    ItemsStore.setAll(
      ['Item 1', 'Item 2'].map(function(item, i) {
        return {
          id: i,
          label: item
        }
      })
    );
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
    SelectedStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={'app'}>
        <Body
          items={this.state.items}
          selectedItems={this.state.selectedItems} />
        <Footer />
      </div>
    );
  }
}
