"use strict";
exports.__esModule = true;
var singletonState_1 = require("./singletonState");
var pageManager_1 = require("./pageManager");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function (args) {
        var inst = new singletonState_1.SingletonState().getState();
        var pm = new pageManager_1.PageManager(inst);
        pm.startProgram();
    };
    return Main;
}());
var m = new Main();
m.main(null);
