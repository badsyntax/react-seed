import './_Body.scss';
import React from 'react';

class Body extends React.Component {

  renderItem(item) {
    return (
      <li key={item.id}>{item.label}</li>
    );
  }

  render() {
    return (
      <div className={'body'}>
        <h1>React Seed</h1>
        <p>This is an example seed app, powered by React, ES6 &amp; webpack.</p>
        <p>Here is some example data:</p>
        <ul>
          {this.props.items.map(this.renderItem, this)}
        </ul>
      </div>
    );
  }
}

Body.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Body;
