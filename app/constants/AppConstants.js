'use strict';

import pkg from '../../package';
export const DEBUG = (process.env.NODE_ENV !== 'production');

export const APP_TITLE = pkg.name;

export const NEWS_UPDATED = 'NEWS_UPDATED';
export const ACTION_NEWS_GET = 'ACTION_NEWS_GET';
export const ACTION_NEWS_GET_SUCCESS = 'ACTION_NEWS_GET_SUCCESS';
export const ACTION_NEWS_GET_ERROR = 'ACTION_NEWS_GET_ERROR';
export const ACTION_NEWS_REFRESH = 'ACTION_NEWS_REFRESH';
