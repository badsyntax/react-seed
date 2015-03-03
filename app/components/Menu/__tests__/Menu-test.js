'use strict';

import React from 'react/addons';

jest.dontMock('../Menu.jsx');
jest.dontMock('../../MenuItem/MenuItem.jsx');

import Menu from '../Menu.jsx';

var { TestUtils } = React.addons;

describe('Menu', function() {

  var menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  var menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} onSelect={function(){}} onDeselect={function(){}} />
  );
  var menuElem = React.findDOMNode(menu);

  it('Has the correct css class', function() {
    expect(menuElem.className).toEqual('menu');
  });

  it('Renders the menu items', function() {
    expect(menuElem.querySelectorAll('li').length).toEqual(2);
  });
});
