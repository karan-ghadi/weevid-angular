var app = angular.module('accountController', []);

app.controller('accountCtrl', function ($scope, $routeParams) {
	$scope.tab = $routeParams.tabName ? $routeParams.tabName : 'profile';

	$scope.setTab = function (newTab) {
		$scope.tab = newTab;
	};

	$scope.isSet = function (tabName) {
		return $scope.tab === tabName;
	};

	$scope.onProfileSubmit = (data) => {
		console.log(data);
	}

	$scope.onAccountSubmit = (data) => {
		console.log(data);
	}

	$scope.onPasswordSubmit = (data) => {
		console.log(data);
	}

});