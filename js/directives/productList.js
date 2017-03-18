myApp.directive("productList", function () {
    return function ( $scope, element, attr) {
        let ul = angular.element("<ul>")
        element.append(ul)
        attr.$observe('products', function (value) {
            ul.children().remove()
            let products = JSON.parse(value)
            products.forEach(item => {
                let li = angular.element("<li>")
                li.text(item.product)
                ul.append(li)
            })
        })
    }
})