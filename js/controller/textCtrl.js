myApp.controller("TextCtrl", function($scope, $http ) {
    $scope.deleteItem = function (id) {
        $http({ method: "DELETE", url:`http://localhost:8080/products/${id}` })
            .then( () => {
                $scope.data = $scope.data.filter( item => { return item._id != id })
                let el = angular.element("<p class='alert alert-info'>Product deleted</p>")
                let parent = angular.element(document.querySelector("table"));
                parent.after(el);
            })
            .catch( () => {
                let el = angular.element("<p class='alert alert-danger'>Product not deleted</p>")
                let parent = angular.element(document.querySelector("table"));
                parent.after(el);
            })
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

