'use strict';

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
