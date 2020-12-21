import { SingletonState } from './singletonState.js';
export class UserManager {
    constructor() {
        this.cart = [];
        this.inst = new SingletonState().getState();
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    watchCart() {
        if (this.cart.length <= 0) {
            return "Your cart is empty.";
        }
        else {
            let sum = 0;
            let outString = "";
            for (let set of this.cart) {
                outString += set["product"].id + " : " + set["count"] + " | Total : " + set["product"].price * set["count"] + "\n";
                sum += set["product"].price * set["count"];
            }
            outString += "Total : " + sum;
            return outString;
        }
    }
    addProductToCartbyID(idx, count) {
        let foundedinCart = false;
        for (let product of this.inst.getProductManager().products) {
            if (idx == product.getID()) {
                for (let set of this.cart) {
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
    }
    clearCart() {
        this.cart = [];
    }
    deleteProductInCartP(p) {
        const idx = this.cart.indexOf(p);
        this.cart.splice(idx, 1);
    }
    deleteProductInCartI(i) {
        for (let set of this.cart) {
            if (i == set["product"].getID()) {
                let item = set["product"].toString();
                this.deleteProductInCartP(set["product"]);
                return item;
            }
        }
        return null;
    }
}
//# sourceMappingURL=userManager.js.map