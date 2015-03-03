'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  ITEM_SELECTED,
  ITEM_DESELECTED
} from '../constants/AppConstants';

export default {

  selectItem(item) {
    AppDispatcher.dispatch({
      actionType: ITEM_SELECTED,
      item: item
    });
  },

  deSelectItem(item) {
    AppDispatcher.dispatch({
      actionType: ITEM_DESELECTED,
      item: item
    });
  }
}
