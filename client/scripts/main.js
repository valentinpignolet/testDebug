'use strict';

var namespace = 'main';

var angular = require('angular');
//require('angular-ionic');
var app = angular.module(namespace, [
    // inject:modules start
    require('./test')(namespace).name
    // inject:modules end
]);

var runDeps = ['$window'];
var run = function($window) {

};

run.$inject = runDeps;
app.run(run);

module.exports = app;
