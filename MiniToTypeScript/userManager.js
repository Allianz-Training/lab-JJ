"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var singletonState_js_1 = require("./singletonState.js");
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.cart = [];
        this.inst = new singletonState_js_1.SingletonState().getState();
    }
    UserManager.prototype.getType = function () {
        return this.type;
    };
    UserManager.prototype.setType = function (type) {
        this.type = type;
    };
    UserManager.prototype.watchCart = function () {
        if (this.cart.length <= 0) {
            return "Your cart is empty.";
        }
        else {
            var sum = 0;
            var outString = "";
            for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
                var set = _a[_i];
                outString += set["product"].id + " : " + set["count"] + " | Total : " + set["product"].price * set["count"] + "\n";
                sum += set["product"].price * set["count"];
            }
            outString += "Total : " + sum;
            return outString;
        }
    };
    UserManager.prototype.addProductToCartbyID = function (idx, count) {
        var foundedinCart = false;
        for (var _i = 0, _a = this.inst.getProductManager().products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (idx == product.getID()) {
                for (var _b = 0, _c = this.cart; _b < _c.length; _b++) {
                    var set = _c[_b];
                    if (set["product"].name.equals(product.name)) {
                        foundedinCart = true;
                        set["count"] += 1;
                    }
                }
                if (!foundedinCart) {
                    this.cart.push({ "product": product, "count": 1 });
                }
                console.log("Added " + product.name + " to cart");
                return true;
            }
        }
        return false;
    };
    UserManager.prototype.clearCart = function () {
        this.cart = [];
    };
    UserManager.prototype.deleteProductInCartP = function (p) {
        var idx = this.cart.indexOf(p);
        this.cart.splice(idx, 1);
    };
    UserManager.prototype.deleteProductInCartI = function (i) {
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var set = _a[_i];
            if (i == set["product"].getID()) {
                var item = set["product"].toString();
                this.deleteProductInCartP(set["product"]);
                return item;
            }
        }
        return null;
    };
    return UserManager;
}());
exports.UserManager = UserManager;
