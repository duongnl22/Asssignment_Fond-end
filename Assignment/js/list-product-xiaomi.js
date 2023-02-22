function iphoneCtrl($scope, $http , $routeParams) {
    $scope.idIphone = $routeParams.id
    $scope.listIphone = [];
    const apiUrlIphone = "http://localhost:3000/product-iphone";
    $http
        .get(apiUrlIphone)
        .then(function (response) {
            $scope.listIphone = response.data;
        })
        .catch(function (error) {
            console.log(error)
        })

    $scope.count = 0;
    $scope.myCount = function () {
        $scope.count++;
    }

}

function samsungCtrl($scope, $http ,$routeParams) {
    $scope.idSamsung = $routeParams.id;
    $scope.listSamSung = [];
    const apiUrlIphone = "http://localhost:3000/product-samsung";
    $http
        .get(apiUrlIphone)
        .then(function (response) {
            $scope.listSamSung = response.data;
        })
        .catch(function (error) {
            console.log(error)
        })
}
function oppoCtrl($scope, $http, $routeParams) {
    $scope.idOppo = $routeParams.id;
    $scope.listOppo = [];
    const apiUrlIphone = "http://localhost:3000/product-oppo";
    $http
        .get(apiUrlIphone)
        .then(function (response) {
            $scope.listOppo = response.data;
        })
        .catch(function (error) {
            console.log(error)
        })
}
function xiaomiCtrl($scope, $http , $routeParams) {
    $scope.idXiaomi = $routeParams.id;
    $scope.listXiaomi = [];
    const apiUrlIphone = "http://localhost:3000/product-xiaomi";
    $http
        .get(apiUrlIphone)
        .then(function (response) {
            $scope.listXiaomi = response.data;
        })
        .catch(function (error) {
            console.log(error)
        })
}


