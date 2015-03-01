import React from 'react';
import {ExampleStore} from '../../stores/ExampleStore.jsx';

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
