Array.prototype.first = Array.prototype.first || function first() {
  return this[0];
};

Array.prototype.last = Array.prototype.last || function last() {
  return this[this.length - 1];
};
