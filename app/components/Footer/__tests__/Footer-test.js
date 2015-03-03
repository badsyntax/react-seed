'use strict';

import React from 'react';

jest.dontMock('../Footer.jsx');

import Footer from '../Footer.jsx';

var { TestUtils } = React.addons;

describe('Footer', function() {
  it('Has the correct css class', function() {
    var footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    var footerElem = TestUtils.findRenderedDOMComponentWithTag(footer, 'footer');
    expect(footerElem.getDOMNode().className).toEqual('footer');
  });
});
