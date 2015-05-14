'use strict';

import React from 'react/addons';
import Footer from '../Footer.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('Footer', () => {
  it('Should have the correct css class', () => {
    let footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.className).to.equal('footer');
  });
});
