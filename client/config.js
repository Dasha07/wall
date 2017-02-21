var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/index.html",
        controller: "LoginController"
    }).when("/wall", {
        templateUrl: "partials/wall.html",
        controller: "WallController"
      });
});
