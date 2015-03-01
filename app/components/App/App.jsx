import React from 'react';
import {Header} from '../Header/Header.jsx';
import {Body} from '../Body/Body.jsx';
import {Footer} from '../Footer/Footer.jsx';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
