'use strict';

import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;
export const NAVIGATION_UPDATED = 'NAVIGATION_UPDATED';
