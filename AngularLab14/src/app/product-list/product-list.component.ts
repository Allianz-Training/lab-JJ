import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;
  constructor() {
    this.products = [];
    // this.products.push({
    //   name: 'ส้มโอ',
    //   price: 990,
    // });
    // this.products.push({
    //   name: 'แตงโม',
    //   price: 1000,
    // });
    // this.products.push({
    //   name: 'มะพร้่าวน้ำหอม',
    //   price: 500,
    // });
  }

  ngOnInit(): void {}

  selectedProduct(productComponent: ProductItemComponent) {
    // alert(`Product ${product.name} selected`);
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach((p) => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
}
