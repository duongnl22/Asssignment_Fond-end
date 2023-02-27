var apiIphone = "http://localhost:3000/product-iphone";
var apiSamSung = "http://localhost:3000/product-samsung";
var apiOppo = "http://localhost:3000/product-oppo";
var apiXiaomi = "http://localhost:3000/product-xiaomi";
var myApp = angular.module("appCategory", []);

myApp.controller("categoryCtrl", function ($scope, $http) {
    // listIphone
    $scope.listIphone = [];
    $http
        .get(apiIphone)
        .then(function (response) {
            $scope.listIphone = response.data
        })
        .catch(function (e) {
            console.log(e)
        })
    $scope.product = {
        name: "",
        oldPrice: "",
        newPrice: "",
        type: "",
        image: ""
    }


    // Select iphone
    $scope.viTri = -1;
    $scope.selectIphone = function (index) {
        let idSelect = $scope.listIphone[index].id;
        $scope.viTri = idSelect;
        $http
            .get(apiIphone + "/" + idSelect)
            .then(function (response) {
                $scope.product = response.data;
            })
            .catch(function (e) {
                console.log(e)
            })
    }




    // delete iphone
    $scope.deleteIphone = function (index) {
        $http
            .delete(apiIphone + "/" + $scope.listIphone[index].id)
            .then(function () {
                $scope.listIphone.splice(index, 1);
                alert("Xóa sản phẩm thành công!!")
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    //SamSung
    $scope.listSamSung = [];
    $http
        .get(apiSamSung)
        .then(function (response) {
            $scope.listSamSung = response.data
        })
        .catch(function (e) {
            console.log(e)
        })

    // select samsung
    // $scope.viTri = -1;
    $scope.selectSamsung = function (index) {
        let idSelect = $scope.listSamSung[index].id;
        $scope.viTri = idSelect;
        $http
            .get(apiSamSung + "/" + idSelect)
            .then(function (response) {
                $scope.product = response.data;
            })
            .catch(function (e) {
                console.log(e)
            })
    }
    // delete samsung
    $scope.deleteSamsung = function (index) {
        $http
            .delete(apiSamSung + "/" + $scope.listSamSung[index].id)
            .then(function () {
                $scope.listSamSung.splice(index, 1);
                alert("Xóa sản phẩm thành công!!")
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    // Oppo
    $scope.listOppo = [];
    $http
        .get(apiOppo)
        .then(function (response) {
            $scope.listOppo = response.data
        })
        .catch(function (e) {
            console.log(e)
        })

    // select oppo
    // $scope.viTri = -1;
    $scope.selectOppo = function (index) {
        let idSelect = $scope.listOppo[index].id;
        $scope.viTri = idSelect;
        $http
            .get(apiOppo + "/" + idSelect)
            .then(function (response) {
                $scope.product = response.data;
            })
            .catch(function (e) {
                console.log(e)
            })
    }
    // delete oppo
    $scope.deleteOppo = function (index) {
        $http
            .delete(apiOppo + "/" + $scope.listOppo[index].id)
            .then(function () {
                $scope.listOppo.splice(index, 1);
                alert("Xóa sản phẩm thành công!!")
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    //Xiaomi
    $scope.listXiaomi = [];
    $http
        .get(apiXiaomi)
        .then(function (response) {
            $scope.listXiaomi = response.data
        })
        .catch(function (e) {
            console.log(e)
        })
    // select xiaomi
    // $scope.viTri = -1;
    $scope.selectXiaomi = function (index) {
        let idSelect = $scope.listXiaomi[index].id;
        $scope.viTri = idSelect;
        $http
            .get(apiXiaomi + "/" + idSelect)
            .then(function (response) {
                $scope.product = response.data;
            })
            .catch(function (e) {
                console.log(e)
            })
    }
    // delete xiaomi    
    $scope.deleteXiaomi = function (index) {
        $http
            .delete(apiXiaomi + "/" + $scope.listXiaomi[index].id)
            .then(function () {
                $scope.listXiaomi.splice(index, 1);
                alert("Xóa sản phẩm thành công!!")
            })
            .catch(function (error) {
                console.log(error)
            })
    }




    $scope.onSubmit = function () {
        if ($scope.viTri == -1) {
            if ($scope.product.type === 'iphone') {
                // Add iphone
                $http
                    .post(apiIphone, $scope.product)
                    .then(function () {
                        $scope.listIphone.push($scope.product);
                        alert("Thêm sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else if ($scope.product.type === 'samsung') {
                // add samsung
                $http
                    .post(apiSamSung, $scope.product)
                    .then(function () {
                        $scope.listSamSung.push($scope.product);
                        alert("Thêm sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            } else if ($scope.product.type === 'oppo') {
                // add oppo
                $http
                    .post(apiOppo, $scope.product)
                    .then(function () {
                        $scope.listOppo.push($scope.product);
                        alert("Thêm sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else {
                // add xiaomi
                $http
                    .post(apiXiaomi, $scope.product)
                    .then(function () {
                        $scope.listXiaomi.push($scope.product);
                        alert("Thêm sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        } else {
            if ($scope.product.type === 'iphone') {
                // Update iphone
                $http
                    .put(apiIphone + "/" + $scope.listIphone[$scope.viTri].id, $scope.product)
                    .then(function () {
                        $scope.viTri = -1
                        alert("Cập nhật sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else if ($scope.product.type === 'samsung') {
                // update samsung
                $http
                    .put(apiSamSung + "/" + $scope.listSamSung[$scope.viTri].id, $scope.product)
                    .then(function () {
                        $scope.viTri = -1
                        alert("Cập nhật sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else if ($scope.product.type === 'oppo') {
                // update oppo
                $http
                    .put(apiOppo + "/" + $scope.listOppo[$scope.viTri].id, $scope.product)
                    .then(function () {
                        $scope.viTri = -1
                        alert("Cập nhật sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else {
                // update xiaomi
                $http
                    .put(apiXiaomi + "/" + $scope.listXiaomi[$scope.viTri].id, $scope.product)
                    .then(function () {
                        $scope.viTri = -1
                        alert("Cập nhật sản phẩm thành công!!")
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }


        }
    }
})
