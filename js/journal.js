function Journal(title, body) {
  this.header = title;
  this.contents = body;
}

Journal.prototype.wordCount = function(body) {
  var wordCount = body.split(' ');
  return wordCount.length;
};

Journal.prototype.vowelCount = function(body) {
  return body.replace(/[^aeiouy]/gi, "").length;
};

Journal.prototype.consonantCount = function(body) {
  return body.replace(/[aeiouy\s\W]/gi, "").length;
};

Journal.prototype.getTeaser = function(body) {
  var bodyArray = body.split('.');
  var firstSentence = bodyArray[0].split(' ');
  if (firstSentence.length >= 8) {
    firstSentence.splice([8]);
    return firstSentence.join(" ");
  } else {
    return firstSentence.join(" ");
  }
};

exports.journalModule = Journal;
