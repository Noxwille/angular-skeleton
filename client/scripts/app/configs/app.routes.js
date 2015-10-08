define(function () {
    'use strict';

    return Router;

    Router.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function Router ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/my-route");

        /**
         * Description all routers.
         */
        $stateProvider
            .state('main', {
                abstract: true,
                views:    {
                    'header':  {
                        templateUrl: 'templates/app/main/header.tmpl.html'
                        //controller: ''
                        //controllerAs: ''
                    },
                    'content': {
                        templateUrl: 'Content'
                        //controller: ''
                        //controllerAs: ''
                    },
                    'footer':  {
                        templateUrl: 'templates/app/main/footer.tmpl.html'
                        //controller: ''
                        //controllerAs: ''
                    }
                }
            });
    }
});