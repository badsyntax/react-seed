# React seed

A boilerplate for react with ES6 and browserify.

## What you get

* Compilation of ES6 with jsx to ES5
* Jest testing framework
* Browserify bundling
* Sass & CSS bundling

## Usage

```
git clone https://github.com/badsyntax/react-seed.git my-project && cd $_ && rm -r .git
```

## npm scripts

_You'll need to be on a unixy type system to run the npm scripts._

```
npm start # Build and start the app in production mode
npm run start-dev # Build and start the app in dev mode, watch for changes
```

## Examples

ES6 classes, modules and template literals:

```js
// Filename: App.jsx

import React from 'react';
import {Body} from './Body.jsx';

export class App extends React.Component {
  getClassName() {
    return 'foo';
  }
  render() {
    let x = 'x';
    return (
      <div className={`${x} ${this.getClassName()} bar`}>
        <h1>Example of React with es6 and browserify</h1>
        <Body />
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
