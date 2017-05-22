function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function(body) {
  var splitBody = body.split(' ');
  return splitBody.length();
};

exports.journalModule = Journal;
