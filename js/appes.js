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
        "link": "https://lufvape.github.io/MSMcArquitectos/"

    }, {
        "name": "Marfil",
        "title": "El supermercado online de la salud",
        "client": "Marfil",
        "place": "Ibagué",
        "date": "2016",
        "description":"Marfil es una empresa familiar ibaguereña que quería comenzar a tener presencia en la red mediante una plataforma para que sus clientes pudieran ordenar sus productos en linea. " +
        "Todo comenzó con una reunión con los dueños, mediante la cual se establecieron las prioridades de la aplicación. El siguiente paso fue comenzar a construir los bocetos preliminares con ayuda de los mismos empleados de la empresa y clientes." +
        "La funcionalidad se fue desarrollando y probando iterativamente con los empleados, la empresa y algunos usuarios, con esto se lograron hacer modificaciones y tener un sistema agradable al uso. " +
        "Para el prototipado final e implementación de la aplicación web se utilizaron Angular, Firebase y Bootstrap.",
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
        "title": "Reduciendo el desperdicio de alimentos",
        "client": "IDEO(MOOC)",
        "place": "Bogotá",
        "date": "2016",
        "description":"En el marco del curso de diseño centrado en el usuario dictado de manera virtual por IDEO formamos un grupo de trabajo para dar solución al problema de desperdicio de comida. Nuestro nicho de mercado fueron solteros y recién casados. " +
        "Como primera medida se diseñaron distintos tipos de entrevistas, una para expertos como chefs y amas de casa, y otra para el grupo al que queríamos intervenir, las entrevistas se realizaron a diferentes personas y se obtuvieron datos relevantes e interesantes sobre el problema " +
        "En la fase de ideación se tomaron en cuenta todas las ideas que pudieran llegar a la mente, sin restricciones se pudo llegar a conceptos interesantes y que podían ayudar a mejorar tanto la visión del grupo objetivo como el nivel de responsabilidad hacia el problema " +
        "Finalmente se realizó un prototipo inicial que consistía en una apalicación la cual tenía el principio de una red social que lograba integrarse con su ambiente y un kit para la cocina. ",
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
        "title": "ERP accesible para MiPyMes",
        "client": "Uniandes(proyecto de grado)",
        "place": "Bogotá",
        "date": "2015",
        "description":"El proyecto SFIMC (Sistematización fácil e intuitiva para Mipymes Colombianas) busca apoyar a las MiPymes colombianas por medio del desarrollo de una plataforma que facilite la sistematización de los procesos básicos de todo tipo de empresa." +
        " Esta plataforma debe ser economica, facil de instalar y fácil de usar, por lo cual se usan herramientas tecnológicas de software libre y se entregan manuales claros y concisos para que una persona con pocas bases de conocimiento en tecnología pueda desarrollar" +
        " dichas actividades. Con la iniciativa SFIMC se busca apoyar a los pequeños empresarios y emprendedores para que manejen sus transacciones, automaticen sus procesos de negocio, y controlen de manera fácil y efectiva su negocio sin incurrir en costos que posiblemente" +
        " no puedan asumir. Adicional a esto es necesario mostrar y hacer entender a las pequeñas organizaciones que las TIC’s no son un gasto, son una inversión, que con cifras tangibles reales, una implementación correcta y un determinado tiempo se recupera lo invertido, y" +
        " que como consecuencia de esto aumenta la productividad de la empresa (competitividad).",
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
        "title": "Enseñando robótica en básica primaria",
        "client": "Uniandes(proyecto de grado)",
        "place": "Bogotá",
        "date": "2015",
        "description":"Algunos claustros han aprovechado muy bien las tecnologías de información, hasta el punto de comunicarse y discutir con estudiantes en diferentes partes del mundo, para compartir sus trabajos y experiencias; pero esto es sólo un ejemplo" +
        " de lo que se puede hacer con la tecnología, se debe buscar una forma más eficiente de vincularla a los procesos de enseñanza-aprendizaje en los colegios. Este es el objetivo de este trabajo: Brindar a estudiantes y docentes de educación básica primaria," +
        " la descripción de algunas actividades mediante la cual se logre una mejor comprensión del proceso de diseño en ingeniería y su relación con la tecnología, con el fin de generar mayor interés en las áreas de STEM y promover algunas competencias STEM " +
        "Uno de los aspectos de interés en la última década para este tipo de labor es la robótica, con una gran cantidad de artefactos y posibilidades de dónde elegir; para el caso de estudio actual se trabajará sobre cubelets, " +
        "Para incluir de forma interesante los robots dentro del entorno educativo se utiliza el marco Understanding by Design(Jay McTighe y Grant Wiggins) en el diseño curricular de la acividad. Esta aproximación busca que el desarrollo de currículos sea de forma descendente" +
        " desde los objetivos hacia las actividades, teniendo  los resultados finales como el elemento importante, medidos en las capacidades, habilidades, y conocimientos que los estudiantes deben construir para el final de una sesión de trabajo o de la secuencia completa.",
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
        "title": "Seguridad electrónica",
        "client": "Uniandes(proyecto de curso)",
        "place": "Bogotá",
        "date": "2015",
        "description":"Este proyecto buscaba crear un modelo de negocio para un proyecto de investigadores de la Universidad de los Andes. El proyecto comenzó con entrevistas, se realizaron búsquedas en bases de datos por patentes similares que pudieran ser competentes para tanto " +
        "la invención como el modelo de negocio. Se definió el mercado y una estrategia utilizando la estrategia del océano azul. Proyecto confidencial.",
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
