var apiKey = require('./../.env').apiKey;


Lookup = function() {};
Repos = function() {};
Lookup.prototype.getLookup = function() {
  var name = $('#lookup').val();
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response) {
    $(".place").text(response.name);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

Repos.prototype.getRepos = function() {
    var name = $('#lookup').val();
  $.get('https://api.github.com/users/' + name +  '/repos?access_token=' + apiKey).then(function(response) {
      for (var i = 0; i < response.length; i++) {
        if (response[i].description === null) {
          response[i].description = 'No description in repo';
        } else {
          response[i].description =response[i].description
        }
        $("#results").append("<li>"+response[i].name +"<br>" +response[i].description +"<br>" +response[i].created_at+"</li>");
      }
    }).fail(function(error) {

      console.log("errorname");
    });

};
exports.lookupModule = Lookup;
exports.reposModule = Repos;
