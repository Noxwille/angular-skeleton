define(function () {
    'use strict';

    return MyControllerCtrl;

    MyControllerCtrl.$inject = ['$scope'];

    function MyControllerCtrl ($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.title = 'vm: Title2';
        vm.body  = 'vm: Body'
    }
});