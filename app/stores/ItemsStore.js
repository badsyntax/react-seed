'use strict';

import BaseStore from './BaseStore';
import { ITEMS_UPDATED } from '../constants/AppConstants';

class ItemsStore extends BaseStore {

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }
}

export default new ItemsStore();
