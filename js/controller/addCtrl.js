myApp.controller("addCtrl", function($scope, $http) {
    $scope.addItem = function ( product, price, addForm ) {
        if( addForm.$valid ){
            let data = {
                product,
                price,
                isBuy: false
            }
            $scope.product = ''
            $scope.price = ''
            $http({ method: "POST", data, url:"http://localhost:8080/products" })
                .then( ( { data } ) => {
                    $scope.data.push( data )
                    let el = angular.element("<p class='alert alert-info'></p>")
                    el.text(`Product ${data.product} added`)
                    let parent = angular.element(document.querySelector("form"));
                    parent.after(el);
                })
                .catch( () => {
                    let el = angular.element("<p class='alert alert-danger'></p>")
                    el.text(`Product ${data.product} not added`)
                    let parent = angular.element(document.querySelector("form"));
                    parent.after(el);
                })
        }
    }
})