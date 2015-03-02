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

## React with ES6

### ES6 classes

```js
import React from 'react';

export class MainSection extends React.Component {
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

We can use ES6 classes and can extend from React.Component. (React 0.13.0 requirement.)

ES6 modules work too!

```js
import {MainSection} from './components/MainSection.react.jsx';
```

### String templating for classes

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

As you can see, you can use template literals [6] to create your classnames.

## Credits

This project was initially forked from https://github.com/tcoopman/react-es6-browserify
