myApp.config(function ($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'views/addForm.html',
        controller: 'addCtrl'
    });
    $routeProvider.when('/list', {
        templateUrl: 'views/productsList.html',
        controller: 'TextCtrl'
    });
    $routeProvider.when('/home', {
        templateUrl: 'views/homePage.html',
        controller: 'IndexCtrl'
    });

    $routeProvider.otherwise({redirectTo:'/home'});
});