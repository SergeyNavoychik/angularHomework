var myApp = angular.module( "myApp", [] )
myApp.controller("IndexCtrl", function($scope, dataService) {
    $scope.data = dataService
})