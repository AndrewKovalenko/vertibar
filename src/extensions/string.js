const URIRex = /^(http|https|ftp|file)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
const FIRST = 0;
const SECOND = 1;

String.prototype.isURI = String.prototype.isURI || function isURI() {
  return URIRex.test(this);
};

String.prototype.capitalize = String.prototype.capitalize || function capitalize() {
  return this[FIRST].toUpperCase() + this.slice(SECOND);
};
