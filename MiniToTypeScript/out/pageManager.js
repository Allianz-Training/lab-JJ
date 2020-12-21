import { Product } from './product.js';
import { UserType, PageName } from './myEnum.js';
import { UserManager } from './userManager.js';
//import * as readline from 'readline'
export class PageManager {
    constructor(inst) {
        this.inst = inst;
        this.user = new UserManager();
        this.page = inst.currentPage;
    }
    startProgram() {
        this.page = PageName.LOGIN_PAGE;
        console.log("What do you want to do?\n 1:Buy item(User)\n 2:Manage item(Admin)\n 3:Exit");
        let choice;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            choice = parseInt(input);
        });
        rl.close();
        if (choice == 1) {
            this.user.setType(UserType.USER);
            this.mainUserPage(this.user);
        }
        else if (choice == 2) {
            this.user.setType(UserType.ADMIN);
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
    }
    mainUserPage(usr) {
        this.page = PageName.USER_PAGE;
        let choice = 0;
        console.log("Main Page");
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("What would you like to do?");
        console.log(" 1:Add product to Cart");
        console.log(" 2:Watch products in cart");
        console.log(" 3:Logout");
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
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
    }
    mainAdminPage(usr) {
        this.page = PageName.ADMIN_PAGE;
        let choice = 0;
        console.log("\nHello " + usr.getType());
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("What would you like to do?");
        console.log(" 1:Add Product");
        console.log(" 2:Remove Product");
        console.log(" 3:Logout");
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
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
    }
    showCartPage(usr) {
        this.page = PageName.CART_PAGE;
        console.log("Your Cart:");
        console.log(usr.watchCart());
        if (usr.cart.length <= 0) {
            this.back();
        }
        console.log("What would you like to do?");
        console.log(" 1:Delete item in the cart");
        console.log(" 2:Check out");
        console.log(" 3:Back");
        let choice;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            choice = parseInt(input);
        });
        rl.close();
        if (choice == 1) {
            this.removeFromCartPage();
        }
        else if (choice == 2) {
            const date = new Date();
            const dd = date.getDate().toString();
            const MM = (date.getUTCMonth() + 1).toString();
            const yyyy = date.getFullYear().toString();
            const HH = date.getHours().toString();
            const mm = date.getMinutes().toString();
            const ss = date.getSeconds().toString();
            let bill = "Order receipt:\n" + usr.watchCart() + "\n" + `${yyyy}-${mm}-${dd} at ${HH}:${mm}:${ss}` + "\nAddress:\n";
            this.checkOutPage(bill, `${yyyy}${MM}${dd}${HH}${mm}${ss}`);
        }
        else if (choice == 3) {
            this.back();
        }
        else {
            console.log("Wrong input!");
            this.showCartPage(this.user);
        }
    }
    addToCartPage(usr) {
        this.page = PageName.USER_ADD_PAGE;
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("What would you like to add?");
        let foundedProduct = false;
        let foundedinCart = false;
        let choice;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            choice = parseInt(input);
        });
        rl.close();
        if (!usr.addProductToCartbyID(choice, 1)) {
            console.log("Not Found this item!");
        }
        this.back();
    }
    removeFromCartPage() {
        this.page = PageName.USER_REMOVE_PAGE;
        console.log("What product that you want to remove from your cart?");
        for (let set of this.user.cart) {
            console.log(" " + set["product"].toString());
        }
        let choice;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            choice = parseInt(input);
        });
        rl.close();
        let removed = this.user.deleteProductInCartI(choice);
        if (removed == null) {
            console.log("Not has this product in Cart!");
        }
        else {
            console.log("Removed " + removed + " from your cart.\n");
        }
        this.back();
    }
    checkOutPage(bill, d) {
        console.log("Please add your address for shipping : ");
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        let addr;
        rl.on('line', (input) => {
            addr = input;
        });
        rl.close();
        try {
            let fileName = "Receipt_" + d + ".txt";
            const fs = require('fs');
            fs.writeFile(fileName, bill + addr, 'utf8');
            console.log("Successfully saved the receipt.");
        }
        catch (exception) {
            console.log("An error occurred.");
        }
        this.user.cart = [];
        this.mainUserPage(this.user);
    }
    addProductToList() {
        this.page = PageName.ADMIN_ADD_PAGE;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("Please enter product name to add : ");
        let productName;
        rl.on('line', (input) => {
            productName = input;
        });
        console.log("Please enter price : ");
        let productPrice;
        rl.on('line', (input) => {
            productPrice = parseFloat(input);
        });
        rl.close();
        let newProduct = new Product(productName, productPrice);
        this.inst.productManager.addProduct(newProduct);
        console.log("Add " + productName + " to Productlist!\n");
        console.log("Product List");
        for (let product of this.inst.getProductManager().products) {
            console.log(" (" + product.getID() + ")" + product.name);
        }
        console.log();
        this.back();
    }
    removeProductfromList() {
        this.page = PageName.ADMIN_REMOVE_PAGE;
        console.log("Product List");
        this.inst.getProductManager().showAll();
        console.log("Please fill product id that you want to remove from list?");
        let idProductRemove;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            idProductRemove = parseInt(input);
        });
        rl.close();
        this.inst.productManager.removeProductbyID(idProductRemove);
        console.log("Product List");
        for (let product of this.inst.getProductManager().products) {
            console.log(" (" + product.getID() + ")" + product.name);
        }
        this.back();
    }
    back() {
        switch (this.page) {
            case PageName.ADMIN_PAGE:
                this.startProgram();
                break;
            case PageName.USER_PAGE:
                this.startProgram();
                break;
            case PageName.CART_PAGE:
                this.mainUserPage(this.user);
                break;
            case PageName.USER_REMOVE_PAGE:
                this.showCartPage(this.user);
                break;
            case PageName.USER_ADD_PAGE:
                this.mainUserPage(this.user);
                break;
            case PageName.ADMIN_REMOVE_PAGE:
                this.mainAdminPage(this.user);
                break;
            case PageName.ADMIN_ADD_PAGE:
                this.mainAdminPage(this.user);
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=pageManager.js.map