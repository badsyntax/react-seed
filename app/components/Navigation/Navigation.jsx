import './_Navigation.scss';

import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      selectedIndex: null
    };
  }

  getSelectedIndex() {
    let router = this.context.router;
    let pages = this.props.pages;
    for (let i = pages.length - 1; i >= 0; i--) {
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

Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Navigation.propTypes = {
  pages: React.PropTypes.array.isRequired
};

export default Navigation;
