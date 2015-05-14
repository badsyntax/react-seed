'use strict';

import 'babel-core/polyfill';

let context = require.context('.', true, /-test\.js$/);
context.keys().forEach(context);
