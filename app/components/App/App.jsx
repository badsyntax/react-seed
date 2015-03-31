'use strict';

import './_App.scss';

import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import ItemsStore from '../../stores/ItemsStore';
import SelectedStore from '../../stores/SelectedStore';
import AppActions from '../../actions/AppActions';

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
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    SelectedStore.addChangeListener(this.onChange);
    AppActions.getItems();
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
