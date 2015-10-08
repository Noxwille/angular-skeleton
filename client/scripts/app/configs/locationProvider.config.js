define(function () {
    'use strict';

    return locationProvider;

    locationProvider.$inject = ['$locationProvider'];

    function locationProvider ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix(' ');
    }
});