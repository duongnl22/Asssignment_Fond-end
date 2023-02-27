function cartCtrl($scope, $http) {
    var apiCart = "http://localhost:3000/cart"
    $scope.sl = 1;

    $scope.giam = function () {
        $scope.sl--;
        if ($scope.sl < 1) {
            alert("Số lượng phải lớn hơn 0");
            $scope.sl = 1;
        }
    }
    $scope.tang = function () {
        if ($scope.sl < 3) {
            $scope.sl++;
        } else {
            alert("Chỉ được mua tối đa với số lượng bằng 3 ");
            $scope.sl = 3;
        }
    }



    $scope.listCart = [];
    $http
        .get(apiCart)
        .then(function (response) {
            $scope.listCart = response.data;
        })
        .catch(function (e) {
            console.log(e);
        })

        
}