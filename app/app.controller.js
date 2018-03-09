angular.module('BlankApp').controller('mainController', ['$scope', 'pageFactory', mainController]);
function mainController($scope, pageFactory) {
    $scope.Page = pageFactory;
}