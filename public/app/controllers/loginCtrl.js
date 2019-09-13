var app = angular.module('loginController', []);

app.controller('loginCtrl', function ($scope) {

    // on login button click
    $scope.onLogin = (data) => {
        console.log(data);
    }

});