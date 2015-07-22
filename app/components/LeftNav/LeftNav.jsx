import styles from './_LeftNav.scss';

import React from 'react';
import { LeftNav as MuiLeftNav } from 'material-ui';

let menuItems = [
  { route: 'home', text: 'Posts' },
  { route: 'about', text: 'About' }
];

export default class LeftNav extends React.Component {

  state = {
    selectedIndex: null
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  getSelectedIndex() {
    return 0;
  }

  onHeaderClick() {
    this.refs.leftNav.close();
  }

  onLeftNavChange() {
    console.log('changed');
  }

  render() {
    var header = (
      <div className={styles.logo} onClick={this.onHeaderClick.bind(this)}>
        {'Left Nav'}
      </div>
    );

    return (
      <MuiLeftNav
        className={styles['left-nav']}
        docked={false}
        header={header}
        isInitiallyOpen={false}
        menuItems={menuItems}
        onChange={this.onLeftNavChange.bind(this)}
        ref={'leftNav'}
        selectedIndex={this.getSelectedIndex()} />
    );
  }
}
