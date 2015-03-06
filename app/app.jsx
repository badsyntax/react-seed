'use strict';

import 'babel-core/polyfill';
import './index.html';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import App from './components/App/App';

React.render(
  <App />,
  document.getElementById('app')
);
