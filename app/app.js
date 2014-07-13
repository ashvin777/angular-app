define([
    "angularAMD",
    "angular-route",
    "angular-ui-bootstrap",
    "angular-chartjs"
    ],
    function (angularAMD) {

        var app = angular.module("hsbc", ["ngRoute", "ui.bootstrap", "chartjs"]);
        app.config(function ($routeProvider) {
            $routeProvider.when("/home",
                angularAMD.route({
                    templateUrl: 'template/planalysis.html',
                    controller: 'PLAnalysisController',
                    controllerUrl: "controllers/PLAnalysisController"
                }))
                .otherwise({
                    redirectTo: '/home'
                });
        });

        angularAMD.bootstrap(app);
        return app;
    });