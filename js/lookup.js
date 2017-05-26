var apiKey = require('./../.env').apiKey;


Lookup = function() {};

Lookup.prototype.getLookup = function(name) {
  var name = $("#lookup").val("");
  $.get('https://api.github.com/users/Luey-Ny0ike?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.lookupModule = Lookup;
