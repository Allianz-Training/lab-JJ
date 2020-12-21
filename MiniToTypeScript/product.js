"use strict";
exports.__esModule = true;
exports.Product = void 0;
var singletonState_js_1 = require("./singletonState.js");
var Product = /** @class */ (function () {
    function Product(name, price) {
        var inst = new singletonState_js_1.SingletonState().getState();
        this.id = inst.productManager.counter();
        this.name = name;
        this.price = price;
    }
    Product.prototype.getID = function () {
        return this.id;
    };
    Product.prototype.toString = function () {
        return this.id + ":" + this.name;
    };
    return Product;
}());
exports.Product = Product;
