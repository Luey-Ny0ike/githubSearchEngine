var apiKey = require('./../.env').apiKey;
var Lookup = require('./../js/lookup.js').lookupModule;
var repos = require('./../js/lookup.js').reposModule;
$(document).ready(function() {
  var lookupObject = new Lookup();
  var reposObject = new Repos();
  $("#search").click(function() {
    var name = $('#lookup').val();
      $("li.remove").remove();
    lookupObject.getLookup(name);
    reposObject.getRepos(repos);
  });
});
