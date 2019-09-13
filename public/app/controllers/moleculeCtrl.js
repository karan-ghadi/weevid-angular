var app = angular.module('moleculeController', []);

app.controller('moleculeCtrl', function($scope) {
	$scope.tab = 'analytics';

	$scope.setTab = function(newTab) {
		$scope.tab = newTab;
	};

	$scope.isSet = function(tabName) {
		return $scope.tab === tabName;
	};
});