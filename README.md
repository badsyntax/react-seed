# React seed [![Build Status](https://travis-ci.org/badsyntax/react-seed.svg?branch=master)](https://travis-ci.org/badsyntax/react-seed)

A boilerplate for building React apps with ES6 and webpack.

## What you get

* React 0.13
* ES6, ES7 & JSX to ES5 via babel
* webpack with react hot loader, and other useful loaders
* Inline (local) css
* Karma, mocha, chai & sinon for testing with mocking examples
* Basic flux architecture with app actions, stores and example web API usage
* React router ([feature/react-router](https://github.com/badsyntax/react-seed/tree/feature/react-router))
* Material UI ([feature/material-ui](https://github.com/badsyntax/react-seed/tree/feature/material-ui))

## Getting started

### Installing with git

```bash
git clone --depth=1 https://github.com/badsyntax/react-seed.git my-project
```

### Installing with yeoman

1. `npm install -g yo`
2. `npm install -g generator-react-seed`
3. Use the generator like so: `yo react-seed`

## npm scripts

* `npm start` - Build and start the app in dev mode at http://localhost:8000
* `npm test` - Run the tests
* `npm run build` - Run a production build

## Examples

### Writing components:

```js
// Filename: Menu.jsx

'use strict';

import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item) => {
          return (<MenuItem item={item} />);
        }, this)}
      </ul>
    );
  }
}
```

###Writing tests:

```js
// Filename: __tests__/Menu-test.jsx

'use strict';

import React from 'react/addons';
import { expect } from 'chai';

import Menu from '../Menu.jsx';
import MenuItem from '../MenuItem.jsx';

// Here we create a mocked MenuItem component.
class MockedMenuItem extends MenuItem {
  render() {
    return (
      <li className={'mocked-menu-item'}>{this.props.item.label}</li>
    );
  }
}

// Here we set the mocked MenuItem component.
Menu.__Rewire__('MenuItem', MockedMenuItem);

describe('Menu', () => {

  let { TestUtils } = React.addons;

  let menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  let menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} />
  );
  let menuElem = React.findDOMNode(menu);
  let items = menuElem.querySelectorAll('li');

  it('Should render the menu items', () => {
    expect(items.length).to.equal(2);
  });

  it('Should render the menu item labels', () => {
    Array.prototype.forEach.call(items, (item, i) => {
      expect(item.textContent.trim()).to.equal(menuItems[i].label);
    });
  })

  it('Should render the mocked menu item', () => {
    expect(menuElem.querySelectorAll('li')[0].className).to.equal('mocked-menu-item');
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

* **Important note:** If you're importing component Sass files within your JavaScript component files, then each sass file will be compiled as part of a different process, and thus you cannot share global references. See [this issue](https://github.com/jtangelder/sass-loader/issues/105) for more information.
* Sass include paths can be adjusted in the `webpack/loaders.js` file.
* All CSS (compiled or otherwise) is run through Autoprefixer.
* CSS files are combined in the order in which they are imported in JavaScript, thus
you should always import your CSS/Sass before importing any other JavaScript files.
* Use an approach like [BEM](http://cssguidelin.es/#bem-like-naming) to avoid specificity
issues that might exist due to unpredicatable order of CSS rules.

## HTML files

All required `.html` files are compiled with lodash.template and synced into the `./build` directory:

```js
// Filename: app.jsx
import './index.html';
```

* You can adjust the lodash template data in the `webpack/loaders.js` file.

## Conventions

* Use fat arrows for anonymous functions
* Don't use `var`. Use `let` and `const`.


## Releasing

1. `npm version patch`
2. `git push && git push --tags`
3. `npm login` (Optional)
4. `npm publish`

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify

## License

Copyright (c) 2015 Richard Willis

MIT (http://opensource.org/licenses/MIT)
