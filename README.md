# React seed

A boilerplate for react with ES6 and browserify.

## What you get

* Compilation of jsx with sourcemaps
* Compilation of ES6 to ES5
* Compilation of Sass with sourcemaps
* Jest test framework
* Browserify bundling
* CSS bundling
* Asset URL fingerprinting

## npm scripts

You'll need to be on a unixy type system to run the npm scripts.

```
npm start # Build and start the app in production mode
npm run start-dev # Build and start the app in dev mode, watch for changes
```

## React with ES6 examples

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

ES6 modules work too:

```js
import {MyComponent} from './MyComponent.jsx';
```

You can use template literals within jsx:

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

## Releasing

* Log in to npm: `npm login`
* Bump version: `npm version patch`
* Push to remote: `git push`
* Publish package: `npm publish`

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify
