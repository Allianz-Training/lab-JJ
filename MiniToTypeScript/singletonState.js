"use strict";
exports.__esModule = true;
exports.SingletonState = void 0;
var productManager_js_1 = require("./productManager.js");
var myEnum_js_1 = require("./myEnum.js");
var SingletonState = /** @class */ (function () {
    function SingletonState() {
    }
    SingletonState.prototype.getState = function () {
        if (this.instance == null) {
            this.instance = new SingletonState();
            this.productManager = new productManager_js_1.ProductManager();
            this.currentPage = myEnum_js_1.PageName.LOGIN_PAGE;
        }
        return this.instance;
    };
    SingletonState.prototype.getProductManager = function () {
        return this.productManager;
    };
    return SingletonState;
}());
exports.SingletonState = SingletonState;
