define(function () {
    'use strict';

    return Router;

    Router.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Router ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/my-route");

        /**
         * Description all routers.
         */
        $stateProvider
            .state('main', {
                abstract: true,
                url: '',
                views: {
                    '': {
                        templateUrl: 'templates/app/main/main.tmpl.html',
                        controller: 'MainCtrl',
                        controllerAs: 'vm'
                    },
                    'header@main': {
                        templateUrl: 'templates/app/main/header.tmpl.html',
                        controller: 'HeaderCtrl',
                        controllerAs: 'vm'
                    },
                    'content@main': 'content',
                    'footer@main': {
                        templateUrl: 'templates/app/main/footer.tmpl.html',
                        controller: 'FooterCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
    }
});
