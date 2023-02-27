var apiLogin = "http://localhost:3000/login"
var appLogin = angular.module("appLogin", []);


appLogin.controller("loginCtrl", function ($scope, $http) {

  $scope.listLogin = [];
  $http
    .get(apiLogin)
    .then(function (response) {
      $scope.listLogin = response.data
    })
    .catch(function (error) {
      console.log(error)
    })





  $scope.login = function () {

    for (var i = 0; i < $scope.listLogin.length; i++) {
      if (
        $scope.user == $scope.listLogin[i].userName &&
        $scope.pass == $scope.listLogin[i].password
      ) {
        window.open("../src/index.html");
      } else {
        alert("Login that bai");
      }

    }

  };



})