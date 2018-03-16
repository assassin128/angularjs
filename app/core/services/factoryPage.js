(function () {
    'use strict';

    angular
        .module('BlankApp')
        .factory('factoryPage', factoryPage);

    factoryPage.$inject = [];

    /* @ngInject */
    function factoryPage() {
        var title = 'default';
        var service = {
            title: getTitle,
            setTitle: setTitle
        };
        return service;

        ////////////////

        function getTitle() {
            return title;
        }

        function setTitle(newTitle) {
            title = newTitle;
        }
    }

})();

