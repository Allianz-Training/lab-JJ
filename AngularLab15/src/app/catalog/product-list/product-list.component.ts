import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;
  constructor(private backendService: BackendService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }

  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach((p) => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
}
