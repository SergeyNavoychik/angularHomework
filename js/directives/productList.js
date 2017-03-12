myApp.directive("productList", function () {
    return function ( $scope, element, attr) {
        let ul = angular.element("<ul>")
        element.append(ul)
        $scope.data.forEach(item => {
            let li = angular.element("<li>")
            li.text(item.product)
            ul.append(li)
        })
    }
})