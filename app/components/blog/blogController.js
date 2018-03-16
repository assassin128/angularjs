(function () {
    'use strict';

    angular
        .module('BlankApp')
        .controller('blogController', blogController);

    blogController.$inject = ['factoryPage'];

    /* @ngInject */
    function blogController(factoryPage) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            factoryPage.setTitle('Blog');
        }
    }

})();

