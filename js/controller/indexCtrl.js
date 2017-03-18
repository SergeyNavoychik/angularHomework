myApp.controller("IndexCtrl", function($scope, $http) {
    $scope.data = []
    $http({ method: "GET", url:"http://localhost:8080/products" }).then(function ( { data } ) {
        $scope.data = data
    })
})