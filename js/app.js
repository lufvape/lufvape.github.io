var app = angular.module('plunker', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/main', {
        templateUrl: "main.html",
        controller: "mainController"
    }).when('/detail/:productName', {
        templateUrl: "details.html",
        controller: "detailsController"
    }).otherwise({
        redirectTo: "/main"
    });
})
    .controller("mainController", function($scope, dataService) {
        $scope.store = {}; //.products

        $scope.store.products = dataService.getProducts();
    })
    .controller("detailsController", function($scope, $routeParams, dataService) {


        $scope.product = dataService.getProductAt($routeParams.productName);

    });


angular.module("plunker").service("dataService", function(filterFilter) {
    var items = [{
        "name": "Nexus 5",
        "size": "4.95 inches",
        "camera": "8 megapixels"
    }, {
        "name": "Nexus 6",
        "size": "6.0 inches",
        "camera": "13 megapixels"
    }];

    this.getProducts = function() {
        return items;
    };
    this.getProductAt = function(_name) {
        this.getProducts();
        return filterFilter(items, {
            name: _name
        })[0];
    };
});