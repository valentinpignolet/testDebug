'use strict';
var controllername = 'testCtrl';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;

        vm.count_1 = 0;
        vm.count_2 = 0;
        vm.click_1 = function() {
            vm.count_1 ++;
        };

        vm.click_2 = function() {
            vm.count_2 ++;
        };
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};