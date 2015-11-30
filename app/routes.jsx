import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './components/App/App';
import Body from './components/Body/Body';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Body}/>
  </Route>
);
