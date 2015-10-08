define(function(){
    'use strict';

    return FooterCtrl;

    FooterCtrl.$inject = ['$scope'];

    function FooterCtrl ($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.title = 'vm: Footer';

        console.log('Footer loaded');
    }
});
