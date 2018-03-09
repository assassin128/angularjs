angular.module('BlankApp').controller('homeController', ['$scope', 'pageFactory', homeController]);
function homeController($scope, pageFactory) {
    pageFactory.setTitle('home');
}