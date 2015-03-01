import EventEmitter from 'events';

import {STORE_CHANGE} from '../constants/AppConstants.jsx';

export class ExampleStore extends EventEmitter {

  constructor() {
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.emitChange();
  }

  emitChange() {
    this.emit(STORE_CHANGE);
  }

  addChangeListener(callback) {
    this.on(STORE_CHANGE, callback);
  }
}

