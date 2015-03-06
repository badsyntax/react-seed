'use strict';

import React from 'react/addons';

jest.dontMock('../Footer.jsx');

import Footer from '../Footer.jsx';

var { TestUtils } = React.addons;

describe('Footer', () => {
  it('Has the correct css class', () => {
    var footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    var footerElem = React.findDOMNode(footer);
    expect(footerElem.className).toEqual('footer');
  });
});
