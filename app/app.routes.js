angular.module('BlankApp').config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/components/home/homeView.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when('/blog', {
            templateUrl: '/app/components/blog/blogView.html',
            controller: 'blogController',
            controllerAs: 'vm'
        })
        .when('/404', {
            templateUrl: '/app/components/404/404View.html',
            controller: 'error404Controller',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/404'});
    $locationProvider.html5Mode(true);
})