var app = angular.module('registerController', []);

app.controller('registerCtrl', function ($scope) {
    // on register submit button click
    $scope.onRegister = (data) => {
        console.log(data);
    }
});