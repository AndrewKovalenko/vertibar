Array.prototype.first = Array.prototype.first || function first() {
  return this && this[0];
};

Array.prototype.last = Array.prototype.last || function last() {
  return this && typeof this.length !== 'undefined' && this[this.length - 1];
};

Array.prototype.empty = Array.prototype.empty || function empty() {
  return this && this.length !== 'undefined' && this.length === 0;
};
