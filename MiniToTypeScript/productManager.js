"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var product_js_1 = require("./product.js");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
        this.idCount = 0;
        this.products.push(new product_js_1.Product("Apple", 1));
        this.products.push(new product_js_1.Product("Banana", 5));
        this.products.push(new product_js_1.Product("Coconut", 10));
    }
    ProductManager.prototype.counter = function () {
        return this.idCount++;
    };
    ProductManager.prototype.showAll = function () {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log(" (" + product.getID() + ")" + product.name + " | Price : " + product.price);
        }
    };
    ProductManager.prototype.addProduct = function (p) {
        this.products.push(p);
    };
    ProductManager.prototype.removeProduct = function (p) {
        var idx = this.products.indexOf(p, 0);
        this.products.splice(idx, 1);
    };
    ProductManager.prototype.removeProductbyID = function (i) {
        var isFoundedProduct = false;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.getID() == i) {
                isFoundedProduct = true;
                this.removeProduct(product);
                break;
            }
        }
        if (!isFoundedProduct) {
            console.log("Product id " + i + " not existed in this list.");
        }
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
