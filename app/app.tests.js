'use strict';

import 'babel-core/polyfill';

let context = require.context('.', true, /-test\.jsx?$/);
context.keys().forEach(context);
