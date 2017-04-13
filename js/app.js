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
        "name": "MSMc Arquitectos",
        "title": "Portfolio access from any place in the world",
        "client": "MSMc Arquitectos",
        "place": "Ibagué",
        "date": "2016",
        "description":"La firma de arquitectos MSMc Arquitectos me confió la realización de su portafolio web. El proyecto comenzó con entender las necesidades de los arquitectos y el nicho al que dirigían su página" +
        "luego se realizaron los primeros bocetos de las páginas que se requerían, teniendo en cuenta hacer las interacciones simples. Finalmente se decidieron las herramientas y marcos de trabajo a utilizar ",
        "image": "../img/msmc.svg",
        "define": "../img/msmc1.png",
        "understand": "../img/msmc2.png",
        "conceptualize": "../img/msmc3.png",
        "analyze": "../img/msmc4.png",
        "prototype": "../img/msmc5.png",
        "implement": "../img/msmc6.png",

    }, {
        "name": "Marfil",
        "title": "The on-line health supermarket",
        "client": "Marfil",
        "place": "Ibagué",
        "date": "2016",
        "description":"I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act) I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act)",
        "image": "../img/marfil.svg",
        "define": "../img/marfil.svg",
        "understand": "../img/marfil.svg",
        "conceptualize": "../img/marfil.svg",
        "analyze": "../img/marfil.svg",
        "prototype": "../img/marfil.svg",
        "implement": "../img/marfil.svg",
    }, {
        "name": "IDEO",
        "title": "Reducing food waste",
        "client": "IDEO(MOOC)",
        "place": "Bogotá",
        "date": "2016",
        "description":"I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act) I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act)",
        "image": "../img/wastel.svg",
        "define": "../img/wastel.svg",
        "understand": "../img/wastel.svg",
        "conceptualize": "../img/wastel.svg",
        "analyze": "../img/wastel.svg",
        "prototype": "../img/wastel.svg",
        "implement": "../img/wastel.svg",
    },{
        "name": "SFIMC",
        "title": "affordable ERP for Colombian SME's",
        "client": "Uniandes(final project)",
        "place": "Bogotá",
        "date": "2015",
        "description":"I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act) I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act)",
        "image": "../img/sfimc.svg",
        "define": "../img/sfimc.svg",
        "understand": "../img/sfimc.svg",
        "conceptualize": "../img/sfimc.svg",
        "analyze": "../img/sfimc.svg",
        "prototype": "../img/sfimc.svg",
        "implement": "../img/sfimc.svg",
    }, {
        "name": "UbD",
        "title": "Teaching robotics in elementary school",
        "client": "Uniandes(final project)",
        "place": "Bogotá",
        "date": "2015",
        "description":"I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act) I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act)",
        "image": "../img/ubd.svg",
        "define": "../img/ubd.svg",
        "understand": "../img/ubd.svg",
        "conceptualize": "../img/ubd.svg",
        "analyze": "../img/ubd.svg",
        "prototype": "../img/ubd.svg",
        "implement": "../img/ubd.svg",
    },{
        "name": "Zeal",
        "title": "Electronic security",
        "client": "Uniandes(course project)",
        "place": "Bogotá",
        "date": "2015",
        "description":"I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act) I'm a service designer with focus on interaction, who believes in solving the problems end to end. That's why my approach is aligned with the Deming cycle(Plan-Do-Check-Act)",
        "image": "../img/zeal.svg",
        "define": "../img/zeal.svg",
        "understand": "../img/zeal.svg",
        "conceptualize": "../img/zeal.svg",
        "analyze": "../img/zeal.svg",
        "prototype": "../img/zeal.svg",
        "implement": "../img/zeal.svg",
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
