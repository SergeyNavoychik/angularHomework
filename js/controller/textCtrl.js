
var myApp = angular.module( "myApp", [] )
myApp.controller("TextCtrl", function TextCtrl($scope) {
    $scope.data = data
})

myApp.controller("addCtrl", function addCtrl($scope) {
    $scope.list = data
    $scope.addItem = function ( text, price ) {
        if( text && price != undefined ){
            $scope.list.push( { text, price, isBuy: false})
        }
    }
})