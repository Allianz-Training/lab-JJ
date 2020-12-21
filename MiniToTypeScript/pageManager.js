"use strict";
exports.__esModule = true;
exports.PageManager = void 0;
var product_js_1 = require("./product.js");
var myEnum_js_1 = require("./myEnum.js");
var userManager_js_1 = require("./userManager.js");
//import * as readline from 'readline'
var PageManager = /** @class */ (function () {
    function PageManager(inst) {
        this.inst = inst;
        this.user = new userManager_js_1.UserManager();
        this.page = inst.currentPage;
    }
    PageManager.prototype.startProgram = function () {
        this.page = myEnum_js_1.PageName.LOGIN_PAGE;
        console.log("What do you want to do?\n 1:Buy item(User)\n 2:Manage item(Admin)\n 3:Exit");
        var choice;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            choice = parseInt(input);
        });
        rl.close();
        if (choice == 1) {
            this.user.setType(myEnum_js_1.UserType.USER);
            this.mainUserPage(this.user);
        }
        else if (choice == 2) {
            this.user.setType(myEnum_js_1.UserType.ADMIN);
            this.mainAdminPage(this.user);
        }
        else if (choice == 3) {
            console.log("Thank you!");
            return;
        }
        else {
            console.log("\nFalse Input!\n");
            this.startProgram();
        }
    };
    PageManager.prototype.mainUserPage = function (usr) {
        this.page = myEnum_js_1.PageName.USER_PAGE;
        var choice = 0;
        console.log("Main Page");
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("What would you like to do?");
        console.log(" 1:Add product to Cart");
        console.log(" 2:Watch products in cart");
        console.log(" 3:Logout");
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            choice = parseInt(input);
        });
        rl.close();
        if (choice == 1) {
            this.addToCartPage(usr);
        }
        else if (choice == 2) {
            this.showCartPage(usr);
        }
        else if (choice == 3) {
            this.back();
        }
        else {
            console.log("\nWrong Input!\n");
            this.mainUserPage(usr);
        }
    };
    PageManager.prototype.mainAdminPage = function (usr) {
        this.page = myEnum_js_1.PageName.ADMIN_PAGE;
        var choice = 0;
        console.log("\nHello " + usr.getType());
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("What would you like to do?");
        console.log(" 1:Add Product");
        console.log(" 2:Remove Product");
        console.log(" 3:Logout");
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            choice = parseInt(input);
        });
        rl.close();
        if (choice == 1) {
            this.addProductToList();
        }
        else if (choice == 2) {
            this.removeProductfromList();
        }
        else if (choice == 3) {
            this.back();
        }
        else {
            console.log("\nWrong Input!\n");
            this.mainAdminPage(this.user);
        }
    };
    PageManager.prototype.showCartPage = function (usr) {
        this.page = myEnum_js_1.PageName.CART_PAGE;
        console.log("Your Cart:");
        console.log(usr.watchCart());
        if (usr.cart.length <= 0) {
            this.back();
        }
        console.log("What would you like to do?");
        console.log(" 1:Delete item in the cart");
        console.log(" 2:Check out");
        console.log(" 3:Back");
        var choice;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            choice = parseInt(input);
        });
        rl.close();
        if (choice == 1) {
            this.removeFromCartPage();
        }
        else if (choice == 2) {
            var date = new Date();
            var dd = date.getDate().toString();
            var MM = (date.getUTCMonth() + 1).toString();
            var yyyy = date.getFullYear().toString();
            var HH = date.getHours().toString();
            var mm = date.getMinutes().toString();
            var ss = date.getSeconds().toString();
            var bill = "Order receipt:\n" + usr.watchCart() + "\n" + (yyyy + "-" + mm + "-" + dd + " at " + HH + ":" + mm + ":" + ss) + "\nAddress:\n";
            this.checkOutPage(bill, "" + yyyy + MM + dd + HH + mm + ss);
        }
        else if (choice == 3) {
            this.back();
        }
        else {
            console.log("Wrong input!");
            this.showCartPage(this.user);
        }
    };
    PageManager.prototype.addToCartPage = function (usr) {
        this.page = myEnum_js_1.PageName.USER_ADD_PAGE;
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("What would you like to add?");
        var foundedProduct = false;
        var foundedinCart = false;
        var choice;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            choice = parseInt(input);
        });
        rl.close();
        if (!usr.addProductToCartbyID(choice, 1)) {
            console.log("Not Found this item!");
        }
        this.back();
    };
    PageManager.prototype.removeFromCartPage = function () {
        this.page = myEnum_js_1.PageName.USER_REMOVE_PAGE;
        console.log("What product that you want to remove from your cart?");
        for (var _i = 0, _a = this.user.cart; _i < _a.length; _i++) {
            var set = _a[_i];
            console.log(" " + set["product"].toString());
        }
        var choice;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            choice = parseInt(input);
        });
        rl.close();
        var removed = this.user.deleteProductInCartI(choice);
        if (removed == null) {
            console.log("Not has this product in Cart!");
        }
        else {
            console.log("Removed " + removed + " from your cart.\n");
        }
        this.back();
    };
    PageManager.prototype.checkOutPage = function (bill, d) {
        console.log("Please add your address for shipping : ");
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var addr;
        rl.on('line', function (input) {
            addr = input;
        });
        rl.close();
        try {
            var fileName = "Receipt_" + d + ".txt";
            var fs = require('fs');
            fs.writeFile(fileName, bill + addr, 'utf8');
            console.log("Successfully saved the receipt.");
        }
        catch (exception) {
            console.log("An error occurred.");
        }
        this.user.cart = [];
        this.mainUserPage(this.user);
    };
    PageManager.prototype.addProductToList = function () {
        this.page = myEnum_js_1.PageName.ADMIN_ADD_PAGE;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("Please enter product name to add : ");
        var productName;
        rl.on('line', function (input) {
            productName = input;
        });
        console.log("Please enter price : ");
        var productPrice;
        rl.on('line', function (input) {
            productPrice = parseFloat(input);
        });
        rl.close();
        var newProduct = new product_js_1.Product(productName, productPrice);
        this.inst.productManager.addProduct(newProduct);
        console.log("Add " + productName + " to Productlist!\n");
        console.log("Product List");
        for (var _i = 0, _a = this.inst.getProductManager().products; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log(" (" + product.getID() + ")" + product.name);
        }
        console.log();
        this.back();
    };
    PageManager.prototype.removeProductfromList = function () {
        this.page = myEnum_js_1.PageName.ADMIN_REMOVE_PAGE;
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("Please fill product id that you want to remove from list?");
        var idProductRemove;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', function (input) {
            idProductRemove = parseInt(input);
        });
        rl.close();
        this.inst.productManager.removeProductbyID(idProductRemove);
        console.log("Product List");
        for (var _i = 0, _a = this.inst.getProductManager().products; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log(" (" + product.getID() + ")" + product.name);
        }
        this.back();
    };
    PageManager.prototype.back = function () {
        switch (this.page) {
            case myEnum_js_1.PageName.ADMIN_PAGE:
                this.startProgram();
                break;
            case myEnum_js_1.PageName.USER_PAGE:
                this.startProgram();
                break;
            case myEnum_js_1.PageName.CART_PAGE:
                this.mainUserPage(this.user);
                break;
            case myEnum_js_1.PageName.USER_REMOVE_PAGE:
                this.showCartPage(this.user);
                break;
            case myEnum_js_1.PageName.USER_ADD_PAGE:
                this.mainUserPage(this.user);
                break;
            case myEnum_js_1.PageName.ADMIN_REMOVE_PAGE:
                this.mainAdminPage(this.user);
                break;
            case myEnum_js_1.PageName.ADMIN_ADD_PAGE:
                this.mainAdminPage(this.user);
                break;
            default:
                break;
        }
    };
    return PageManager;
}());
exports.PageManager = PageManager;
