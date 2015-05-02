'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ACTION_NEWS_GET_SUCCESS,
  ACTION_NEWS_GET_ERROR
} from '../constants/AppConstants';

export default {

  getNews() {
    WebAPI.getNews()
    .then((posts) => {
      AppDispatcher.dispatch({
        actionType: ACTION_NEWS_GET_SUCCESS,
        posts: posts
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: ACTION_NEWS_GET_ERROR
      });
    });
  },
};
