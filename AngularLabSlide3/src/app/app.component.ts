import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // constructor(private backendService: BackendService) {}
  // @ViewChild('productList')
  // productList: ProductListComponent;
  ngAfterViewInit(): void {
    // this.productList.products = this.backendService.getProducts();
  }

  title = 'angular29-lab1';
}
