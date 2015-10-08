define(function (require, exports, module) {
    'use strict';

    var directive  = {
            crDropdown: require('./directives/cr-dropdown.directive')
        },
        service    = {
            commonService: require('./services/common.service'),
            localStorageService: require('./services/local-storage.service'),
            commonRepository: require('./services/common.repository'),
            exception: require('./services/exception.service')
        };

    /**
     * @module 'App.Common'
     * @description App.Common module.
     */
    module.exports = angular.module('App.Common', [])
        /**
         * Define and Require Services and Repositories.
         */
        .directive('crDropdown', directive.crDropdown)

        /**
         * Define and Require Services and Repositories.
         */
        .service('commonService', service.commonService)
        .service('localStorageService', service.localStorageService)
        .service('commonRepository', service.commonRepository)
        .service('exception', service.exception);
});