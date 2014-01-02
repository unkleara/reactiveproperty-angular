
(function (root) {
    if (root.Rx == null) {
        throw new Error("can't find RxJS.");
    }

    var Rx = root.Rx;

    Rx.Observable.prototype.toReactiveProperty = function ($scope) {
        var source = this;
        return new rxprop.ReactiveProperty($scope, undefined, source);
    };

    Rx.Observable.prototype.toReactiveCollection = function ($scope) {
        var source = this;
        return new rxprop.ReactiveCollection($scope, undefined, source);
    };

    Rx.Observable.prototype.toReactiveCommand = function ($scope) {
        var source = this;
        return new rxprop.ReactiveCommand($scope, undefined, source);
    };
})(this);
