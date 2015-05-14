'use strict';

import 'babel-core/polyfill';
import BaseStore from '../BaseStore.js';
import { expect } from 'chai';

const ITEMS_UPDATED = 'ITEMS_UPDATED';

class TestStore extends BaseStore {
  emitChange() {
    this.emit(ITEMS_UPDATED);
  }
  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(ITEMS_UPDATED, callback);
  }
}

describe('BaseStore', () => {

  it('Should set, get and remove data', function() {

    let store = new TestStore();

    expect(store.getAll()).to.eql([]);

    let item = {
      foo: 'bar'
    };

    store.setAll([item]);
    expect(store.getAll()).to.eql([item]);

    let item2 = {
      foobaz: 'bar'
    };

    store.set(item2);
    store.set(item2); // intentional check for unique items
    expect(store.getAll()).to.eql([item, item2]);

    store.remove(item);
    expect(store.getAll()).to.eql([item2]);
  });

  it('Should call the change listener when data changes', () => {

    let store = new TestStore();
    let onChange = sinon.spy();
    store.addChangeListener(onChange);

    store.setAll([{
      foo: 'bar'
    }]);
    store.set([{
      foobaz: 'bar'
    }]);
    store.remove({
      foo: 'bar'
    });
    expect(onChange.callCount).to.equal(3);
  });

  it('Should remove the change listener', () => {

    let store = new TestStore();
    let onChange = sinon.spy();
    store.addChangeListener(onChange);
    store.setAll([{
      foo: 'bar'
    }]);
    store.removeChangeListener(onChange);
    store.setAll([{
      foo: 'bar'
    }]);
    expect(onChange.callCount).to.equal(1);
  });
});
