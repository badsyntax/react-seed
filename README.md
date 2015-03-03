# React seed

A boilerplate for building React apps with ES6 and browserify.

## What you get

* Compilation of ES6 & jsx to ES5
* Jest testing framework
* Browserify bundling
* Sass & CSS bundling
* Basic flux architecture with app actions, events and stores.

## Getting started

Clone the project and remove the git repository:

```
git clone --depth=1 https://github.com/badsyntax/react-seed.git my-project
cd my-project
rm -r .git
```

## npm scripts

_You'll need to be on a unixy type system to run the npm scripts._

```
npm test # Run the tests
npm start # Build and start the app in production mode
npm run start-dev # Build and start the app in dev mode, watch for changes
```

## Examples

Writing components:

```js
// Filename: Menu.jsx

'use strict';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem.jsx';

var { PropTypes } = React;

class Menu extends React.Component {

  getMenuItem(item) {
    return (
      <MenuItem
        item={item}
        onSelect={this.props.onSelect}
        onDeselect={this.props.onDeselect}
        key={'menu-item-' + item.id} />
    );
  }

  render() {
    return (
      <ul className={'menu'}>
        {this.props.items.map(this.getMenuItem, this)}
      </ul>
    );
  }
}

Menu.propTypes =  {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired
};

export default Menu;
```

Writing tests:

```js

// Filename: __tests__/Footer-test.js

import React from 'react/addons';

var { TestUtils } = React.addons;

jest.dontMock('../Footer.jsx');

import {Footer} from '../Footer.jsx';

describe('Footer', function() {
  it('Has the correct css class', function() {
    var footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    var footerElem = TestUtils.findRenderedDOMComponentWithTag(footer, 'footer');
    expect(footerElem.getDOMNode().className).toEqual('footer');
  });
});
```

## Releasing

* Login to npm: `npm login`
* Bump version: `npm version patch`
* Push to remote: `git push && git push --tags`
* Publish package: `npm publish`

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify
