import { SingletonState } from './singletonState.js';
export class Product {
    constructor(name, price) {
        let inst = new SingletonState().getState();
        this.id = inst.productManager.counter();
        this.name = name;
        this.price = price;
    }
    getID() {
        return this.id;
    }
    toString() {
        return this.id + ":" + this.name;
    }
}
//# sourceMappingURL=product.js.map