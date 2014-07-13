'use strict';
require.config({
    baseUrl : "../",
    // alias libraries paths
    paths: {
        "angular": "lib/angular/angular.min",
        "angular-ui-bootstrap": "lib/angular/angular-ui-bootstrap.min",
        'angularAMD': 'lib/angular/angularAMD.min',
        "angular-route" : "lib/angular/angular-route.min",
        "angular-chartjs" : "lib/angular/angular-chartjs",
        "ui-bootstrap": "lib/bootstrap/js/bootstrap.min",
        "chartjs-core" : "lib/chartjs/Chart.min",
        "domReady": "lib/require/domReady",
        "app" : "app/app"
    },
    
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-ui-bootstrap" : {
            deps : ["ui-bootstrap"],
            exports : "angular"
        },
        "angular-route" : {
            exports : "angular"
        },
        "angular-chartjs" : {
            deps : ["chartjs-core"],
            exports : "angular"
        }
    },
    
    // kick start application
    deps: ["angular","ui-bootstrap","app"]
});