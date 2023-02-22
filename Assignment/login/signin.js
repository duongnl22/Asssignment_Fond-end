var apiSignin = "http://localhost:3000/login"
var appSignin = angular.module("appSignin", []);


appSignin.controller("siginCtrl", function ($scope, $http) {

    $scope.listSignin = []
    $http
        .get(apiSignin)
        .then(function (response) {
            $scope.listSignin = response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    $scope.signinNew = {
        id: "",
        userName: "",
        password: ""
    }
    $scope.signin = function (event) {
        $http
            .post(apiSignin, $scope.signinNew)
            .then(function () {
                $scope.listSignin.push($scope.signinNew)
                alert("Đăng kí thành công !!")
            })
            .catch(function (error) {
                console.log(error)
            })
    }



})