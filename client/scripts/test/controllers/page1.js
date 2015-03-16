'use strict';
var controllername = 'page1';

module.exports = function(app) {
    /*jshint validthis: true */

      var deps = ['$timeline', '$famous'];

    function controller($timeline, $famous) {
        var vm = this;
        var Transitionable = $famous['famous/transitions/Transitionable'];
        vm.enterTransition = new Transitionable(0);

        vm.translate = $timeline([
            [0, [800, 0]],
            [1, [0, 0]]
        ]);

        vm.enter = function($done) {
            vm.enterTransition.set(1, {
                duration: 1000,
                curve: 'easeInOut'
            }, $done);
        };

        vm.leave = function($done) {
            vm.enterTransition.set(0, {
                duration: 1000,
                curve: 'easeInOut'
            }, $done);
        };

    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};