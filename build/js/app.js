(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $('#skeletons').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal(title, body);
    $('#header').text(title);
    $('#content').text(body);
    var wordCount = newJournal.wordCount(body);
    var vowelCount = newJournal.vowelCount(body);
    var consonantCount = newJournal.consonantCount(body);
    var teaser = newJournal.getTeaser(body);
    $('#word-count').text('Word count: ' + wordCount);
    $('#vowel-count').text('Vowel count: ' + vowelCount);
    $('#consonant-count').text('Consonant count: ' + consonantCount);
    $('#teaser').text('Skeleton snippet: ' + teaser);
    $('#soul').text('Soul: Null');
  });
});

},{"./../js/journal.js":1}]},{},[2]);
