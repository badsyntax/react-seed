# React seed [![Circle CI](https://circleci.com/gh/continuata/react-seed.svg?style=svg)](https://circleci.com/gh/continuata/react-seed)

A boilerplate for building React apps with ES6 and webpack.

## What you get

* React 0.13
* ES6, ES7 & JSX to ES5 via babel
* webpack with react hot loader, and other useful loaders
* [Local CSS](https://github.com/webpack/css-loader#local-scope)
* Karma, mocha, chai & sinon for testing with mocking examples
* Basic flux architecture with app actions, stores and example web API usage
* React router ([feature/react-router](https://github.com/badsyntax/react-seed/tree/feature/react-router))
* Material UI ([feature/material-ui](https://github.com/badsyntax/react-seed/tree/feature/material-ui))
* Standard JS for linting

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

import styles from './_Menu.scss'
import React from 'react'
import MenuItem from './MenuItem'

let { Component, PropTypes } = React

export default class Menu extends Component {

  static defaultProps = {
    items: []
  }

  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render () {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item, key) => {
          return (<MenuItem item={item} key={key} />)
        }, this)}
      </ul>
    )
  }
}
```

###Writing tests:

```js
// Filename: __tests__/Menu-test.jsx
import React from 'react/addons'
import { expect } from 'chai'

import Menu from '../Menu.jsx'

describe('Menu', () => {
  let { TestUtils } = React.addons

  let menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ]

  describe('Rendering', () => {
    // Here we create a mocked MenuItem component.
    let menu = TestUtils.renderIntoDocument(
      <Menu items={menuItems} />
    )
    let menuElem = React.findDOMNode(menu)
    let items = menuElem.querySelectorAll('li')

    it('Should render the menu items', () => {
      expect(items.length).to.equal(2)
    })

    it('Should render the menu item labels', () => {
      Array.prototype.forEach.call(items, (item, i) => {
        expect(item.textContent.trim()).to.equal(menuItems[i].label)
      })
    })
  })

  describe('Events', (done) => {
    // Example of simulating browser events.
    it('Should handle click events', () => {
      let menu = TestUtils.renderIntoDocument(
        <Menu items={menuItems} />
      )
      let menuElem = React.findDOMNode(menu)
      let items = menuElem.querySelectorAll('li')
      let node = items[0].querySelector('a')

      window.onAlert = function (alertText) {
        expect(alertText).to.equal("ALERT: 'You clicked Option 1'")
        done()
      }

      TestUtils.Simulate.click(node)
    })
  })
})
```

## Sass, Stylus, CSS & webpack

`import` Sass, Stylus and CSS files from within your JavaScript component files:

```js
// Filename: app.jsx
import 'normalize.css/normalize.css';
import styles from './scss/app.scss';
import styles from './styl/app.styl';
```

* **Note:** If you're importing component Sass, Styl files from within your JavaScript component files, then each sass file will be compiled as part of a different compile process, and thus you cannot share global references. See [this issue](https://github.com/jtangelder/sass-loader/issues/105) for more information.
* Sass include paths can be adjusted in the `webpack/loaders.js` file.
* All CSS (compiled or otherwise) is run through Autoprefixer and style-loader. Any images/fonts etc referenced in the CSS will be copied to the build dir.
* CSS files are combined in the order in which they are imported in JavaScript, thus
you should always import your CSS/Sass before importing any other JavaScript files.
* If not using local CSS, use an approach like [BEM](http://cssguidelin.es/#bem-like-naming) to avoid specificity
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
2. `git push --follow-tags`
3. `npm login` (Optional)
4. `npm publish`

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify

## License

Copyright (c) 2015 Richard Willis

MIT (http://opensource.org/licenses/MIT)
