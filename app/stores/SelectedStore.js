'use strict';

import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  SELECTED_UPDATED,
  ITEM_SELECTED,
  ITEM_DESELECTED
} from '../constants/AppConstants';

class SelectedStore extends BaseStore {

  emitChange() {
    this.emit(SELECTED_UPDATED);
  }

  addChangeListener(callback) {
    this.on(SELECTED_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ITEMS_UPDATED, callback);
  }
}

let store = new SelectedStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ITEM_SELECTED:
      store.set(action.item);
      break;
    case ITEM_DESELECTED:
      store.remove(action.item);
      break;
    default:
  }
});

export default store;
