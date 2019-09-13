// App Routing file
var app = angular.module('appRoutes', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/pages/home.html'
        })
        .when('/create1-1', {
            templateUrl: 'app/views/pages/create1-1.html',
            controller: 'createvideoCtrl'
        })
        .when('/create1-2', {
            templateUrl: 'app/views/pages/create1-2.html',
            controller: 'createvideoCtrl'
        })
        .when('/create1-3', {
            templateUrl: 'app/views/pages/create1-4.html',
            controller: 'createvideoCtrl'
        })
        .when('/create1-4', {
            templateUrl: 'app/views/pages/create1-5.html',
            controller: 'createvideoCtrl'
        })
        .when('/create1-5', {
            templateUrl: 'app/views/pages/create1-7.html',
            controller: 'createvideoCtrl'
        })
        .when('/sign-up', {
            templateUrl: 'app/views/session/sign-up.html',
            controller: 'registerCtrl'
        })
        .when('/login', {
            templateUrl: 'app/views/session/login.html',
            controller: 'loginCtrl'
        })
        .when('/profile', {
            templateUrl: 'app/views/users/profile.html',
            controller: 'profileCtrl'
        })
        .when('/account-settings/:tabName', {
            templateUrl: 'app/views/users/account-settings.html',
            controller: 'accountCtrl'
        })
        .otherwise({
            'redirectTo': '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

app.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        $rootScope.pageRoute = $location.path();
    });
}]);