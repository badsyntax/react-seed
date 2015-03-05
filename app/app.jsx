'use strict';

import 'babel-core/polyfill';
import React from 'react';
import App from './components/App/App';

import './index.html';
import './scss/app.scss';

React.render(
  <App />,
  document.getElementById('app')
);
