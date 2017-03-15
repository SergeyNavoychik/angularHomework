myApp.controller("addCtrl", function($scope, $http) {
    $scope.addItem = function ( product, price, addForm ) {
        if( addForm.$valid ){
            let data = {
                product,
                price,
                isBuy: false
            }
            $http({ method: "POST", data, url:"http://localhost:8080/products" }).then(function ( { data } ) {
                $scope.data.push( data )
            })
        }
    }
})