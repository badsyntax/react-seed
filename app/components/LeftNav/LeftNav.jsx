import './_LeftNav.scss';

import React from 'react';
import { LeftNav as MuiLeftNav } from 'material-ui';

let menuItems = [
  { route: 'home', text: 'Posts' },
  { route: 'about', text: 'About' }
];

class LeftNav extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      selectedIndex: null
    };
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
      <div className={'logo'} onClick={this.onHeaderClick.bind(this)}>
        {'Left Nav'}
      </div>
    );

    return (
      <MuiLeftNav
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

export default LeftNav;
