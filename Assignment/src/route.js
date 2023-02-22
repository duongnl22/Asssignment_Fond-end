var myApp = angular.module("myApp" , ["ngRoute"]);


myApp.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix("");

    $routeProvider
    .when("/gioi-thieu",{
        templateUrl : "./page/gioi-thieu.html"
    })
    .otherwise({
        templateUrl : "./page/trang-chu.html"
    })
})