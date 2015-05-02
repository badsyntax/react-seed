'use strict';

import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  NEWS_UPDATED,
  ACTION_NEWS_GET,
  ACTION_NEWS_GET_SUCCESS,
  ACTION_NEWS_REFRESH
} from '../constants/AppConstants';

class NewsStore extends BaseStore {

  emitChange() {
    this.emit(NEWS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(NEWS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(NEWS_UPDATED, callback);
  }
}

let store = new NewsStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ACTION_NEWS_GET:
    case ACTION_NEWS_REFRESH:
      store.setAll([]);
      break;
    case ACTION_NEWS_GET_SUCCESS:
      store.setAll(action.posts);
      break;
    default:
  }
});

export default store;
