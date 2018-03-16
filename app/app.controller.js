(function () {
    'use strict';

    angular
        .module('BlankApp')
        .controller('mainController', mainController);

    mainController.$inject = ['factoryPage'];

    /* @ngInject */
    function mainController(factoryPage) {
        var vm = this;
        vm.Page = factoryPage;
        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();