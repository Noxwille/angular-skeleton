define(function () {
    'use strict';

    return myDirective;

    function myDirective () {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '='
            },
            templateUrl: 'templates/app/my-module/my-directive.tmpl.html',
            link: linkFn,
            controller: 'MyControllerCtrl',
            controllerAs: 'vm'
        };

        return directive;

        function linkFn(scope, element, attrs, ctrl) {
            console.log('LINK: scope.title = ', scope.title);
            console.log('LINK: scope.vm.title = ', scope.vm.title);
            console.log('LINK: scope.vm.body = ', scope.vm.body);
        }
    }
});