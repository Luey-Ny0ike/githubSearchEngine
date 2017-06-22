var apiKey = require('./../.env').apiKey;


Lookup = function() {};
Repos = function() {};

Lookup.prototype.getLookup = function(name) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response) {
    $(".place").text(response.name);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

Repos.prototype.getRepos = function(name, repos) {
  $.get('https://api.github.com/users/' + repos + '/repos?access_token=' + apiKey).then(function(response) {

      for (var i = 0; i < response.length + 1; i++) {
        if (response[i].description === null) {
          response[i].description = 'No description in repo';
        }
        Repos(response[i].name, response[i].description, response[i].created_at);
      }
    }).fail(function(error) {
      //console.log(error.response.message);
      console.log("errorname");
    });

};
exports.lookupModule = Lookup;
exports.reposModule = Repos;
