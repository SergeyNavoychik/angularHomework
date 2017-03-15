myApp.controller("TextCtrl", function($scope, $http ) {
    $scope.deleteItem = function (id) {
        $http({ method: "DELETE", url:`http://localhost:8080/products/${id}` })
        $scope.data = $scope.data.filter( item => { return item._id != id })
    }
    $scope.changeIsBuy = function (id) {
        let data = { id }
        $http({ method: "PUT", data, url:'http://localhost:8080/products' })
    }
    $scope.deleteAllBought = function () {
        $http({ method: "DELETE", url:'http://localhost:8080/deleteAllBought' })
        $scope.data = $scope.data.filter( item => { return item.isBuy == false })
    }

})

