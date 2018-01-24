import { deepCopy } from './common';

if (typeof Object.prototype.deepCopy === 'undefined') {
  Object.defineProperty(Object.prototype, 'deepCopy', {
    value: function deepCopyObject() {
      return deepCopy.call(this);
    }
  });
}

Object.isUndefined = Object.isUndefined || function isUndefined(instance) {
  return typeof instance === 'undefined';
};
