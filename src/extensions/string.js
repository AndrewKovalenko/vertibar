const URIRex = /^(http|https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

String.prototype.isURI = String.prototype.isURI || function isURI() {
  return URIRex.test(this);
};
