import { deepCopy } from './common';

Object.prototype.deepCopy = Object.prototype.deepCopy || function deepCopyObject() {
  return deepCopy.call(this);
};

Object.isUndefined = Object.isUndefined || function isUndefined(instance) {
  return typeof instance === 'undefined';
};
