define(function () {
    'use strict';

    return localStorageService;

    function localStorageService () {
        var LS = window.localStorage;
        var storage = {
            /**
             *
             * @param headerName {string}
             */
            get: getStorage,

            /**
             *
             * @param headerName
             * @param value
             */
            set: setStorage,

            /**
             *
             * @param headerName {string}
             */
            has: hasStorage,

            /**
             *
             * @param headerName {string}
             */
            clear: clearStorage
        };

        return storage;

        ///////////////////

        function getStorage (headerName) {
            return LS.getItem(headerName);
        }

        function setStorage (headerName, value) {
            return LS.setItem(headerName, value);
        }

        function hasStorage (headerName) {
            return LS.getItem(headerName);
        }

        function clearStorage (headerName) {
            return LS.setItem(headerName, '');
        }
    }
});