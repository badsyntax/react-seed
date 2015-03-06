# React seed

A boilerplate for building React apps with ES6 and webpack.

## What you get

* React 0.13
* Compilation of ES6 & JSX to ES5
* Jest testing framework
* webpack bundling with html, css & sass loaders
* Basic flux architecture with app actions, events and stores

## Getting started

Clone the project and remove the git repository:

```
git clone --depth=1 https://github.com/badsyntax/react-seed.git my-project
cd my-project
rm -rf .git
```

## npm scripts

* `npm start` - Build and start the app in dev mode
* `npm test` - Run the tests
* `npm run build` - Run a production build

## Examples

Writing components:

```js
// Filename: Menu.jsx

'use strict';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './_Menu.scss';

var { PropTypes } = React;

class Menu extends React.Component {

  constructor(...args) {
    super(...args);
    // Set initial state
    this.state = {
      foo: false
    };
  }

  getMenuItem(item) {
    return (
      <MenuItem item={item} key={'menu-item-' + item.id} />
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

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
```

Writing tests:

```js
// Filename: __tests__/Menu-test.js

'use strict';

import React from 'react/addons';

jest.dontMock('../Menu.jsx');
jest.dontMock('../../MenuItem/MenuItem.jsx');

import Menu from '../Menu.jsx';

var { TestUtils } = React.addons;

describe('Menu', () => {

  var menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  var menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} />
  );
  var menuElem = React.findDOMNode(menu);

  it('Renders the menu items', () => {
    expect(menuElem.querySelectorAll('li').length).toEqual(2);
  });
});
```

## Sass, CSS & webpack

`import` Sass and CSS files from within your JavaScript component files:

```js
// Filename: app.jsx
import 'normalize.css/normalize.css';
import './scss/app.scss';
```

Sass include paths can be adjusted in the `webpack.config.js` file.

All imported Sass/CSS is run through Autoprefixer.

## HTML files

All required `.html` files are compiled with lodash.template and synced into the `./build` directory:

```js
// Filename: app.jsx
import './index.html';
```


## Releasing

* Login to npm: `npm login`
* Bump version: `npm version patch`
* Push to remote: `git push && git push --tags`
* Publish package: `npm publish`

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify

## License

Copyright (c) 2015 Richard Willis

MIT (http://opensource.org/licenses/MIT)
