import { deepCopy } from './common';

if (typeof Array.prototype.first === 'undefined') {
  Object.defineProperty(Array.prototype, 'first', {
    get: function first() {
      return this && this[0];
    }
  });
}

if (typeof Array.prototype.last === 'undefined') {
  Object.defineProperty(Array.prototype, 'last', {
    get: function last() {
      return this && typeof this.length !== 'undefined' && this[this.length - 1];
    }
  });
}

Array.prototype.empty = Array.prototype.empty || function empty() {
  return this && this.length !== 'undefined' && this.length === 0;
};

Array.prototype.deepCopy = Array.prototype.deepCopy || function deepCopyArray() {
  return deepCopy.call(this);
};

Array.prototype.flatten = Array.prototype.flatten || function flatten() {
  const result = this.reduce(
    (flatArray, element) => (Array.isArray(element) ?
      [...flatArray, ...flatten.call(element)] :
      [...flatArray, element]),
    []
  );

  return result;
};

if (typeof Array.prototype.head === 'undefined') {
  Object.defineProperty(Array.prototype, 'head', {
    get: function head() { return this.first; }
  });
}

if (typeof Array.prototype.tail === 'undefined') {
  Object.defineProperty(Array.prototype, 'tail', {
    get: function tail() {
      if (this.empty()) {
        return [];
      }

      return this.slice(1);
    }
  });
}
