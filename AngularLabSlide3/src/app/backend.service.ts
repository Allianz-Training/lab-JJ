import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  backendProducts: Product[] = [];
  constructor() {
    this.backendProducts = [
      {
        name: 'ส้มโอ',
        price: 112,
      },
      {
        name: 'แตงโม',
        price: 222,
      },
      {
        name: 'มะพร้าวน้ำหอม',
        price: 333,
      },
    ];
  }

  getProducts(): Product[] {
    return this.backendProducts;
  }

  getProductById(productId: number): Product {
    return;
  }
}
