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
        "description":"The studio MSMc Arquitectos trust me their new web portfolio. The project started with discovering the needs of both the arquitects and their target, this was done by a series of meetings with stakeholders." +
        "The next step was to conduct interviews to users in order to develop some personas and journey maps that help to understand the target market and their needs." +
        " Taking into account that simple interaction across the page must be made the first sketches were done. The process was incremental, from simple paper to high fidelity prototypes." +
        " Finally, the tools were chosen. Materializecss and Jquery were used for interactions and look of the page.",
        "image": "../img/msmc.svg",
        "define": "../img/msmc1.png",
        "understand": "../img/msmc2.png",
        "conceptualize": "../img/msmc3.png",
        "analyze": "../img/msmc4.png",
        "prototype": "../img/msmc5.png",
        "implement": "../img/msmc6.png",
        "link": "https://lufvape.github.io/MSMcArquitectos/"
    }, {
        "name": "Marfil",
        "title": "The on-line health supermarket",
        "client": "Marfil",
        "place": "Ibagué",
        "date": "2016",
        "description":"Marfil is a familly business from Ibagué. They wanted to start an online presence with a web app that allow users to order they products online. " +
        "Everything started with a meeting with the owners to establish the priorities of the application. The next step was to co-create with all stakeholders in order to develop the first sketches for the app." +
        "Functionality was iteratively developed and test with both users and business, by doing this, interactions and ease of use was achived. " +
        "Final implementation was made with Angular, Firebase and Bootstrap.",
        "image": "../img/marfil.svg",
        "define": "../img/marfil1.jpg",
        "understand": "../img/marfil2.jpg",
        "conceptualize": "../img/marfil3.png",
        "analyze": "../img/marfil4.png",
        "prototype": "../img/marfil5.png",
        "implement": "../img/marfil6.png",
        "link": "http://distribucionesmarfil.com/"
    }, {
        "name": "IDEO",
        "title": "Reducing food waste",
        "client": "IDEO(MOOC)",
        "place": "Bogotá",
        "date": "2016",
        "description":"At the online course of human centered design by IDEO we formed a team to give a solution to the food waste problem in our community. Focusing on singles and just married couples. " +
        "At first we designed different types of interviews, one for experts on the field and one for the target market, by conducting the interviews, relevant and interesting data was obtained. " +
        "Ideation was about giving a chance to any idea, without restrictions interesting concepts arrived, and a clear vision about the niche and the responsability of the problem in hand. " +
        "Finally a first protitype was made. It consist on a mobile app that connects with smart kitchen products to serve as a social network of waste. A kitchen kit was made in order to have an offline experience. ",
        "image": "../img/wastel.svg",
        "define": "../img/hcd1.png",
        "understand": "../img/hcd2.png",
        "conceptualize": "../img/hcd3.png",
        "analyze": "../img/hcd4.png",
        "prototype": "../img/hcd5.png",
        "implement": "../img/hcd6.png",
        "link": "../docs/hcddoc.pdf"
    },{
        "name": "SFIMC",
        "title": "affordable ERP for Colombian SME's",
        "client": "Uniandes(final project)",
        "place": "Bogotá",
        "date": "2015",
        "description":"SFIMC (Sistematización fácil e intuitiva para Mipymes Colombianas) project was made to help colombian SME's by developing a module that enhance the automation of basic business processes." +
        " This platform must be easy to install and use and cheap, that's why open source projects were chosen. Step by step manuals are also delivered so a person with basic IT knowledge can set up the system." +
        " With SFIMC initiative the goal is to help owners of SME's and entrepreneurs to manage their transactions, automate their business processes, and effectively control their business with no need to spend a lot of money" +
        " . Additionally the project intent to show small organizations that IT is not an expense but an investment, that manage in the right way and well implemented is only a matter of time to enhance productivity and get a return on investment.",
        "image": "../img/sfimc.svg",
        "define": "../img/sfimc1.png",
        "understand": "../img/sfimc2.png",
        "conceptualize": "../img/sfimc3.png",
        "analyze": "../img/sfimc4.png",
        "prototype": "../img/sfimc5.png",
        "implement": "../img/sfimc6.png",
        "link": "https://youtu.be/NvHPG1vlUG0"
    }, {
        "name": "UbD",
        "title": "Teaching robotics in elementary school",
        "client": "Uniandes(final project)",
        "place": "Bogotá",
        "date": "2015",
        "description":"Some schools made a great use of information technology, to the point to connect and discuss with students arround the world, to share works and experiences; but this is just an example of what can be made with IT." +
        " But it must be a better and more efficient way to bind technology with the process of teaching and learning in schools. An that's the main objective of this work: To give students and teachers of elementary schools," +
        " the description of some activities by which they get a better knowledge of the engineering design process and its relation to technology, ending with a genuine interest in STEM. " +
        "Robotics have been one of the major influences in the last decade for IT literacy, with a great variety of products to choose from; for this specific project the robots are cubelets from modular robotics. " +
        "To include robots in class in an interesting way, the framework of work was Understanding by Design(Jay McTighe y Grant Wiggins) for designing the activities. This framework looks for designing the curriculum in a descending way, form objectives to activities, " +
        " and having the final result as the most important aspect, measured by the skills and knowledge that students must develop at the end of the work session..",
        "image": "../img/ubd.svg",
        "define": "../img/ubd1.png",
        "understand": "../img/ubd2.png",
        "conceptualize": "../img/ubd3.png",
        "analyze": "../img/ubd4.jpg",
        "prototype": "../img/ubd5.png",
        "implement": "../img/ubd6.png",
        "link": "https://youtu.be/fJwEZWsIZpw"
    },{
        "name": "Zeal",
        "title": "Electronic security",
        "client": "Uniandes(course project)",
        "place": "Bogotá",
        "date": "2015",
        "description":"This project was about creating a business model for a research project at Universidad de los Andes. The process started with interviews, followed by a search about similar investigations that can be usefgul for both the business model and the product." +
        " Blue Ocean strategy was used for the business model definition. Confidential.",
        "image": "../img/zeal.svg",
        "define": "../img/zeal1.png",
        "understand": "../img/zeal2.png",
        "conceptualize": "../img/zeal3.png",
        "analyze": "../img/zeal4.png",
        "prototype": "../img/zeal5.png",
        "implement": "../img/zeal6.png",
        "link": ""
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
