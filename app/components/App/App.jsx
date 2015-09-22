import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {items: []}
    AppActions.getItems()
    ItemsStore.listen((data) => {
      this.setState({items: data.items})
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <Body items={this.state.items} />
        <Footer />
      </div>
    );
  }
}
