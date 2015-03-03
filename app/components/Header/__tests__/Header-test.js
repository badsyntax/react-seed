'use strict';

import React from 'react/addons';

jest.dontMock('../Header.jsx');

import Header from '../Header.jsx';

var { TestUtils } = React.addons;

describe('Header', function() {
  it('Has the correct css class', function() {
    var header = TestUtils.renderIntoDocument(
      <Header />
    );
    var headerElem = React.findDOMNode(header);
    expect(headerElem.className).toEqual('header');
  });
});
