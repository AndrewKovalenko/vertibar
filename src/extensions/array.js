import { deepCopy } from './common';

Array.prototype.first = Array.prototype.first || function first() {
  return this && this[0];
};

Array.prototype.last = Array.prototype.last || function last() {
  return this && typeof this.length !== 'undefined' && this[this.length - 1];
};

Array.prototype.empty = Array.prototype.empty || function empty() {
  return this && this.length !== 'undefined' && this.length === 0;
};

Array.prototype.deepCopy = Array.prototype.deepCopy || deepCopy;

Array.prototype.flatten = Array.prototype.flatten || function flatten() {
  const result = this.reduce((flatArray, element) => (Array.isArray(element) ?
    [...flatArray, ...flatten.call(element)] :
    [...flatArray, element]),
  []);

  return result;
};

Array.prototype.head = Array.prototype.head || Array.prototype.first;

Array.prototype.tail = Array.prototype.tail || function tail() {
  if (this.empty()) {
    return undefined;
  }

  return this.slice(1);
};
