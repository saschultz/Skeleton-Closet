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
