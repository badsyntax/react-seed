# React seed

A boilerplate for react with ES6 and browserify.

## What you get

* Compilation of ES6 with jsx to ES5
* Jest testing framework
* Browserify bundling
* Sass & CSS bundling

## npm scripts

_You'll need to be on a unixy type system to run the npm scripts._

```
npm start # Build and start the app in production mode
npm run start-dev # Build and start the app in dev mode, watch for changes
```

## Examples

ES6 classes:

```js
// Filename: MyComponent.jsx

import React from 'react';

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Example of React with es6 and browserify</h1>
        <Body />
      </div>
    );
  }
}
```

ES6 modules:

```js
import {MyComponent} from './MyComponent.jsx';
```

ES6 template literals within jsx:

```js
export class Body extends React.Component {

  getClassName() {
    return 'foo';
  }

  render() {
    var x = 'x';
    return (
      <div className={`${x} ${this.getClassName()} bar`}>
        Hello there!
      </div>
    );
  }
}
```

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify
