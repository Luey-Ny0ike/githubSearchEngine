(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b4998c1ccec365cfc8d7cef6f0f43e97c34742d6";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Lookup = require('./../js/lookup.js').lookupModule;
var repos = require('./../js/lookup.js').reposModule;
$(document).ready(function() {
  var lookupObject = new Lookup();
  var reposObject = new Repos();
  $("#search").click(function() {
    var name = $('#lookup').val();
    lookupObject.getLookup(name);
    reposObject.getRepos(repos);
  });
});

},{"./../.env":1,"./../js/lookup.js":2}]},{},[3]);