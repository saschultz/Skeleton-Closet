function Journal(title, body) {
  this.header = title;
  this.contents = body;
}

Journal.prototype.wordCount = function(body) {
  var wordCount = body.split(' ');
  return wordCount.length;
};

Journal.prototype.vowelCount = function (body) {
  return body.replace(/[^aeiouy]/gi, "").length;
};

exports.journalModule = Journal;
