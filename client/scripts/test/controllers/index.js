'use strict';

module.exports = function(app) {
    // inject:start
    require('./page1')(app);
    require('./testCtrl')(app);
    // inject:end
};