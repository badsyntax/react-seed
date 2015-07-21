import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App/App';

injectTapEventPlugin();

window.onload = function() {
  React.render(
    <App />,
    document.getElementById('app')
  );
};
