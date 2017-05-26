(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a26027b2bb8dde2b62bbcca83fe9bd3283a1880a";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/lookup.js":2}]},{},[3]);
