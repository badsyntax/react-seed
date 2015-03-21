'use strict';

import React from 'react/addons';

jest.dontMock('../Footer.jsx');

import Footer from '../Footer.jsx';

let { TestUtils } = React.addons;

describe('Footer', () => {
  it('Should have the correct css class', () => {
    let footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.className).toEqual('footer');
  });
});
