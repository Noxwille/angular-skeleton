define(function () {
    'use strict';

    return stateProvider;

    stateProvider.$inject = ['$rootScope', '$state'];

    function stateProvider ($rootScope, $state) {
        $rootScope.$state = $state; // state to be accessed from view
    }
});