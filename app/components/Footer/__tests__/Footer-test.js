import React from 'react/addons';

jest.dontMock('../Footer.jsx');

import {Footer} from '../Footer.jsx';

var { TestUtils } = React.addons;

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    var footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    var footerElem = TestUtils.findRenderedDOMComponentWithTag(footer, 'footer');
    expect(footerElem.getDOMNode().className).toEqual('footer');
  });
});
