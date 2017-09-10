var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl : "index.htm"
        })
        .when("/servicios", {
            templateUrl : "servicios.htm"
        })
        .when("/contacto", {
            templateUrl : "contacto.htm"
        })
        .when("/blue", {
            templateUrl : "blue.htm"
        });
    })