/**
 * Created by luisfvargas on 6/04/17.
 */

var app = angular.module('plunkeres', ['ngRoute']);

app.config(function($routeProvider) {

        $routeProvider.when('/main', {
            templateUrl: "maines.html",
            controller: "mainController"
        }).when('/detail/:productName', {
            templateUrl: "detailses.html",
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


angular.module("plunkeres").service("dataService", function(filterFilter) {
    var items = [{
        "name": "MSMc Arquitectos",
        "title": "Portafolio accesible a todo el mundo",
        "client": "MSMc Arquitectos",
        "place": "Ibagué",
        "date": "2016",
        "description":"La firma de arquitectos MSMc Arquitectos me confió la realización de su portafolio web. El proyecto comenzó con entender las necesidades de los arquitectos y el nicho al que dirigían su página" +
        "mediante una serie de reuniones entre las partes. El siguiente paso fue realizar el estudio de los usuarios, esto mediante unas pocas entrevistas y la creación de personas y mapas de usuario." +
        " Luego se realizaron los primeros bocetos de las páginas que se requerían, teniendo en cuenta hacer las interacciones simples.El proceso fue incremental, comenzando desde lo básico con papel y lápiz hasta llegar a prototipos de alta fidelidad." +
        " Finalmente se decidieron las herramientas y marcos de trabajo a utilizar, se trabajó con materializeCSS y Jquery para manejar las interacciones.",
        "image": "../img/msmc.svg",
        "define": "../img/msmc1.png",
        "understand": "../img/msmc2.png",
        "conceptualize": "../img/msmc3.png",
        "analyze": "../img/msmc4.png",
        "prototype": "../img/msmc5.png",
        "implement": "../img/msmc6.png",

    }, {
        "name": "Marfil",
        "title": "El supermercado online de la salud",
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
        "title": "Reduciendo el desperdicio de alimentos",
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
        "title": "ERP accesible para MiPyMes",
        "client": "Uniandes(proyecto de grado)",
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
        "title": "Enseñando robótica en básica primaria",
        "client": "Uniandes(proyecto de grado)",
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
        "title": "Seguridad electrónica",
        "client": "Uniandes(proyecto de curso)",
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
