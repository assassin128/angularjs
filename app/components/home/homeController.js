(function () {
    'use strict';

    angular
        .module('BlankApp')
        .controller('homeController', homeController);

    homeController.$inject = ['factoryPage'];

    /* @ngInject */
    function homeController(factoryPage) {
        var vm = this;
        vm.sayHello = 'Say hello';

        activate();

        ////////////////

        function activate() {
            factoryPage.setTitle('Home');
        }
    }

})();