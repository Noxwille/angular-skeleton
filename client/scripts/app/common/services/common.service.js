define(function () {
    'use strict';

    return commonService;

    commonService.$inject = ['commonRepository'];

    function commonService (commonRepository) {
        var common = {
            /**
             * Get list.
             * @returns {$promise|*}
             */
            getMyList: getMyList
        };

        return common;

        function getMyList() {
            return commonRepository.getMyList().$promise;
        }
    }
});