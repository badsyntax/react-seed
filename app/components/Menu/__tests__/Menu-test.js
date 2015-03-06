'use strict';

import React from 'react/addons';

jest.dontMock('../Menu.jsx');
jest.dontMock('../../MenuItem/MenuItem.jsx');

import Menu from '../Menu.jsx';

var { TestUtils } = React.addons;

describe('Menu', () => {

  var menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  var menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} onSelect={()=>{}} onDeselect={()=>{}} />
  );
  var menuElem = React.findDOMNode(menu);

  it('Has the correct css class', () => {
    expect(menuElem.className).toEqual('menu');
  });

  it('Renders the menu items', () => {
    expect(menuElem.querySelectorAll('li').length).toEqual(2);
  });
});
