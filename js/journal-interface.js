var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $('#skeletons').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal(title, body);
    $('#header').text(title);
    $('#content').text(body);
    var wordCount = newJournal.wordCount(body)
    var vowelCount = newJournal.vowelCount(body)
    $('#word-count').text('Word count: ' + wordCount);
    $('#vowel-count').text('Vowel count: ' + vowelCount);
  });
});
