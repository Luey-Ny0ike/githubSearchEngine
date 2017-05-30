var apiKey = require('./../.env').apiKey;
var Lookup = require('./../js/lookup.js').lookupModule;.reposModule;

$(document).ready(function() {
  var lookupObject = new Lookup();
  var reposObject = new repos();
  $("#search").click(function() {
    var name = $('#lookup').val();
    lookupObject.getLookup(name);
    reposObject.getRepos(repos);
  });
});
