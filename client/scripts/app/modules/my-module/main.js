define(function (require, exports, module) {
    'use strict';

    var router           = require('./configs/myModule.routes'),
        // directives
        myDirective      = require('./directives/my-directive.directive'),
        // controllers
        MyControllerCtrl = require('./controllers/my-controller.controller');

    /**
     * @module App.MyModule
     * @description
     */
    module.exports = angular.module('App.MyModule', [])
        .config(router)
        .directive('myDirective', myDirective)
        .controller('MyControllerCtrl', MyControllerCtrl);

});