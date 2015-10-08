define(function () {
    'use strict';

    return MainCtrl;

    MainCtrl.$inject = ['$scope', '$rootScope'];

    function MainCtrl ($scope, $rootScope) {
        /* jshint validthis: true */
        var vm = this;

        vm.title = 'vm: Main';

        console.log('Main loaded');
    }
});

