'use strict';

import React from 'react/addons';

jest.dontMock('../Header.jsx');

import {Header} from '../Header.jsx';

var { TestUtils } = React.addons;

describe('Header', function() {
  it('Has the correct css class', function() {
    var header = TestUtils.renderIntoDocument(
      <Header />
    );
    var headerElem = TestUtils.findRenderedDOMComponentWithTag(header, 'header');
    expect(headerElem.getDOMNode().className).toEqual('header');
  });
});
