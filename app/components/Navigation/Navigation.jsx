import './_Navigation.scss';

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

  state = {
    selectedIndex: null
  }

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  };

  static propTypes = {
    pages: React.PropTypes.array.isRequired
  };

  getSelectedIndex() {
    let router = this.context.router;
    let pages = this.props.pages;
    let i = pages.length - 1;
    for (; i >= 0; i--) {
      let page = pages[i];
      let isPageActive = Boolean(page.route && router.isActive(page.route));
      if (isPageActive) { return i; }
    }
    return -1;
  }

  renderNavItem(selectedIndex, page, index) {
    let className = null;
    if (index === selectedIndex) { className = '-selected'; }
    return (
      <li className={className} key={'page-' + index}>
        <Link to={page.route}>
          {page.title}
        </Link>
      </li>
    );
  }

  render() {
    let selectedIndex = this.getSelectedIndex();
    return (
      <ul className={'navigation'}>
        {this.props.pages.map(
          this.renderNavItem.bind(this, selectedIndex)
        )}
      </ul>
    );
  }
}
