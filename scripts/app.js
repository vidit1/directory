var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/directory');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('directory', {
            url: '/directory',
            templateUrl: 'html/directory.html'
        })
});

 

