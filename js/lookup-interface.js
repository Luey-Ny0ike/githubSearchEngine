var apiKey = require('./../.env').apiKey;
var Lookup = require('./../js/lookup.js').lookupModule;

$(document).ready(function() {
  var lookupObject = new Lookup();
  $("#search").click(function() {

    var name = $('#lookup').val();
    $('#lookup').val("");
    lookupObject.getLookup(name);
  });
});
