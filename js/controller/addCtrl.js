myApp.controller("addCtrl", function($scope) {
    $scope.addItem = function ( product, price, addForm ) {
        if( addForm.$valid ){
            $scope.data.push( { product, price, isBuy: false})
        }
    }
})