'use strict';
require('angular-ui-router');
require('famous-angular');
require('ngCordova');

var modulename = 'test';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'famous.angular', 'ngCordova']);
    // inject:folders start
    require('./controllers')(app);
    require('./directives')(app);
    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/',
                template: require('./views/home.html'),
                controller: fullname + '.testCtrl',
                controllerAs: 'vm'
            });
            $stateProvider.state('page1', {
                url: '/',
                template: require('./views/page1.html'),
                controller: fullname + '.page1',
                controllerAs: 'vm'
            });
        }
    ]);

    return app;
};
