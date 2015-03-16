'use strict';
/*eslint consistent-this:[2,  "barHeaderCtrl"] */
var directivename = 'barHeader';

module.exports = function(app) {

    // controller
    var controllerDeps = [];
    var controller = function() {
        var barHeaderCtrl = this;
        barHeaderCtrl.leftCount = 0;
        barHeaderCtrl.rightCount = 0;
        barHeaderCtrl.directivename = directivename;

        barHeaderCtrl.leftClick = function() {
            barHeaderCtrl.leftCount += 1;
        };

        barHeaderCtrl.rightClick = function() {
            barHeaderCtrl.rightCount += 1;
        };
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directive = function() {
        return {
            restrict: 'AE',
            scope: {
                title: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controller,
            controllerAs: 'barHeaderCtrl',
            bindToController: true,
            template: require('./barHeader.html'),
            compile: function(tElement, tAttrs) {
                return {
                    pre: function(scope, element, attrs) {

                    },
                    post: function(scope, element, attrs) {

                    }
                };
            }
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
