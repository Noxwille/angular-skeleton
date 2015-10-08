define(function () {
    'use strict';

    return Router;

    Router.$inject = ['$stateProvider'];

    function Router ($stateProvider) {
        /**
         * Description all routers.
         */
        $stateProvider
            // Authorization list Page.
            .state('my-route', {
                url: '/my-route',
                parent: 'main',
                views: {
                    'content': {
                        templateUrl: 'templates/app/my-module/my-template.tmpl.html',
                        controller: 'MyControllerCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
    }
});