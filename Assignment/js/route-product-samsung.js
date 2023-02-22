var myAppProduct = angular.module("myAppProduct", ["ngRoute"]);

myAppProduct.controller("iphoneCtrl", iphoneCtrl);
myAppProduct.controller("samsungCtrl", samsungCtrl);
myAppProduct.controller("oppoCtrl", oppoCtrl);
myAppProduct.controller("xiaomiCtrl", xiaomiCtrl);
myAppProduct.controller("cartCtrl", cartCtrl)



myAppProduct.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("");

    $routeProvider

        .when("/iphone", {
            templateUrl: "./page/list-iphone.html"
        })
        .when("/samsung", {
            templateUrl: "./page/list-samsung.html"
        })
        .when("/oppo", {
            templateUrl: "./page/list-oppo.html"
        })
        .when("/xiaomi", {
            templateUrl: "./page/list-xiaomi.html"
        })
        .when("/iphone-chi-tiet", {
            templateUrl: "./page/product-iphone-1.html"
        })
        .when("/samsung-chi-tiet", {
            templateUrl: "./page/product-samsung-1.html"
        })
        .when("/oppo-chi-tiet", {
            templateUrl: "./page/product-oppo-1.html"
        })
        .when("/xiaomi-chi-tiet", {
            templateUrl: "./page/product-xiaomi-1.html"
        })
        .when("/cart",{
            templateUrl : "./page/cart.html "
        })
        .when("/iphone-chi-tiet/:id",{
            templateUrl : "./page/product-iphone-1.html"
        })
        .when("/samsung-chi-tiet/:id",{
            templateUrl : "./page/product-samsung-1.html"
        })
        .when("/oppo-chi-tiet/:id",{
            templateUrl : "./page/product-oppo-1.html"
        })
        .when("/xiaomi-chi-tiet/:id",{
            templateUrl : "./page/product-xiaomi-1.html"
        })
        .otherwise({
            templateUrl: "./page/list-samsung.html"
        })
})

