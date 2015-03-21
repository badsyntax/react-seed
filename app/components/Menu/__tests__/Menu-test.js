'use strict';

import React from 'react/addons';

jest.dontMock('../Menu.jsx');
jest.dontMock('../../MenuItem/MenuItem.jsx');

import Menu from '../Menu.jsx';

let { TestUtils } = React.addons;

describe('Menu', () => {

  let menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  let menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} onSelect={()=>{}} onDeselect={()=>{}} />
  );
  let menuElem = React.findDOMNode(menu);

  it('Should have the correct css class', () => {
    expect(menuElem.className).toEqual('menu');
  });

  it('Should render the menu items', () => {
    expect(menuElem.querySelectorAll('li').length).toEqual(2);
  });
});
