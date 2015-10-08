define(function (require, exports, module) {
    'use strict';

    var angular   = require('angular'),
        // constants
        constants = require('./configs/constants.constant'),
        // config
        exception = require('./configs/exception.config'),
        events = require('./configs/events.config'),
        // modules
        Main = require('App.Main').name,
        MyModule = require('App.MyModule').name,
        // providers
        locationProvider = require('./configs/locationProvider.config'),
        stateProvider = require('./configs/stateProvider.config');

    /**
     * Loading Global Modules and Dependencies
     */
    require('angularResource');
    require('angularRouter');
    require('angularTemplates');

    /**
     * @module app
     */
    angular.module('App', [
        // Vendor modules
        'ui.router',
        'ngResource',
        'templates',

        // Custom modules
        Main,
        MyModule
    ]);

    /**
     * Configuring App Module
     */
    angular.module('App')
        .constant('Constants', constants)
        .config(locationProvider)
        .config(exception)
        .run(events)
        .run(stateProvider);

    angular.element(document.documentElement).ready(function () {
        angular.bootstrap(document, ['App']);
    });

    module.exports = angular.module('App');
});