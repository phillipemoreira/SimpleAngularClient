var app = angular.module("demoAp", ["ngRoute"]);

var config = function ($routeProvider) {

    $routeProvider
    .when("/",
        { controller: "simpleController", templateUrl: "/app-client/views/view1.html"})
    .when("/view2",
        { controller: "simpleController", templateUrl: "/app-client/views/view2.html" })
    .otherwise(
        { redirectTo: "/" });
};

app.config(config);
