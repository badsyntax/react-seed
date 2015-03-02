'use strict';

import EventEmitter from 'events';
import _ from 'lodash';

export default class BaseStore extends EventEmitter {

  constructor() {
    this.setAll([]);
  }

  setAll(items) {
    this.data = new Set(items);
    this.emitChange();
  }

  getAll() {
    return Array.from(this.data);
  }

  set(item) {
    if (!this.data.has(item)) {
      this.data.add(item);
      this.emitChange();
    }
  }

  remove(item) {
    this.data.delete(item);
    this.emitChange();
  }

  getById(id) {
    return _.findWhere(this.getAll(), {
      id: id
    });
  }

  emitChange() {}
}
