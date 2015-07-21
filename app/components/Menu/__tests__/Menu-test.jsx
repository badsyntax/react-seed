import React from 'react/addons';
import { expect } from 'chai';

import Menu from '../Menu.jsx';
import MenuItem from '../MenuItem.jsx';

// Here we create a mocked MenuItem component.
class MockedMenuItem extends MenuItem {
  render() {
    return (
      <li className={'mocked-menu-item'}>{this.props.item.label}</li>
    );
  }
}

// Here we set the mocked MenuItem component.
Menu.__Rewire__('MenuItem', MockedMenuItem);

describe('Menu', () => {

  let { TestUtils } = React.addons;

  let menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  let menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} />
  );
  let menuElem = React.findDOMNode(menu);

  it('Should render the menu items', () => {
    expect(menuElem.querySelectorAll('li').length).to.equal(2);
    expect(menuElem.querySelectorAll('li')[0].textContent.trim()).to.equal(menuItems[0].label);
    expect(menuElem.querySelectorAll('li')[1].textContent.trim()).to.equal(menuItems[1].label);
  });

  it('Should render the mocked menu item', () => {
    expect(menuElem.querySelectorAll('li')[0].className).to.equal('mocked-menu-item');
  });
});
