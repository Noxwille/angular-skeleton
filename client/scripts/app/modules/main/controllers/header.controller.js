define(function () {
    'use strict';

    return HeaderCtrl;

    HeaderCtrl.$inject = ['$scope'];

    function HeaderCtrl ($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.title = 'vm: Header';

        console.log('Header loaded');
    }
});
