import {Product} from './product.js'

export class ProductManager {

    products:Product[] = [];
    idCount: number = 0;

    constructor() {
        this.products.push(new Product("Apple", 1));
        this.products.push(new Product("Banana", 5));
        this.products.push(new Product("Coconut", 10));
    }

    counter(): number {
        return this.idCount++
    }

    showAll() {
        for (let product of this.products) {
            console.log(" (" + product.getID() + ")" + product.name + " | Price : " + product.price);
        }
    }

    addProduct(p: Product) {
        this.products.push(p);
    }

    removeProduct(p: Product) {
        const idx = this.products.indexOf(p,0)
        this.products.splice(idx,1);
    }

    removeProductbyID(i: number) {
        let isFoundedProduct: boolean = false;
        for (let product of this.products) {
            if (product.getID() == i) {
                isFoundedProduct = true;
                this.removeProduct(product);
                break;
            }
        } if (!isFoundedProduct) {
            console.log("Product id " + i + " not existed in this list.");
        }
    }
}