'use strict';

var app = angular.module('app', ['rxprop']);

app.controller("BasicsCtrl", ["$scope",
    function ($scope) {
        var rawValue = {name: "hoge", age: 17};
        $scope.inputValue = new rxprop.ReactiveProperty($scope, rawValue);
        $scope.displayValue = new rxprop.ReactiveProperty($scope, rawValue);



    }]);