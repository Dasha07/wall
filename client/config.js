var app = angular.module("{{template}}", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/{{template}}.html",
        controller: "{{template}}Controller"
    })

});
