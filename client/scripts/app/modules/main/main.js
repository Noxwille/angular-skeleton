define(function (require, exports, module) {
    'use strict';

    var router     = require('./config/main.routes'),
        // controllers
        MainCtrl   = require('./controllers/main.controller'),
        HeaderCtrl = require('./controllers/header.controller'),
        FooterCtrl = require('./controllers/footer.controller');

    /**
     * @module App.Main
     * @description
     */
    module.exports = angular.module('App.Main', [])
        .config(router)
        .controller('MainCtrl', MainCtrl)
        .controller('HeaderCtrl', HeaderCtrl)
        .controller('FooterCtrl', FooterCtrl);
});