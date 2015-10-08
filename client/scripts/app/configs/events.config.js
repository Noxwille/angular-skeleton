define(function () {
    'use strict';

    return events;

    events.$inject = ['$rootScope', '$state', '$stateParams', '$log'];

    function events ($rootScope, $state, $stateParams, $log) {
        $rootScope.$on('$stateChangeStart', changeState);
        $rootScope.$on('$stateChangeSuccess', changeStateSuccess);
        $rootScope.$on('$stateChangeError', goTo404);
        $rootScope.$on('$stateNotFound', goTo404);

        // For use $state in views
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        function changeState () {

        }

        function changeStateSuccess () {

        }

        function goTo404 (event, current, previous, rejection) {
            var destination = (current && (current.title || current.name || current.loadedTemplateUrl))
                || 'unknown target';

            var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');

            $log.warning(msg, [current]);
        }
    }
});