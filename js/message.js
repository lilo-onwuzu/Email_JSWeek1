// constructor
exports.Message = function (to, from, messageText) {
  this.to = to;
  this.from = from;
  this.messageText = messageText;
}

// read method/prototype
exports.Message.prototype.read = function() {
  return "Dear " + this.to + "," + this.messageText + " Yours truly, " + this.from;
}
