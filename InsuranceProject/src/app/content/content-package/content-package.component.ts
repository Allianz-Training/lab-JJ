import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/package';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-package',
  templateUrl: './content-package.component.html',
  styleUrls: ['./content-package.component.css'],
})
export class ContentPackageComponent implements OnInit {
  packages: Package[];
  constructor(private pageService: PageControllerService) {
    this.packages = [
      new Package(1, 'Clothes', ['a', 'b'], '120', 200),
      new Package(2, 'Accessories', ['a', 'b', 'c'], '120', 500),
      new Package(3, 'Cosmetic', ['a', 'b', 'c', 'd'], '120', 700),
    ];
  }
  ngOnInit(): void {
    this.pageService.setPage(1);
  }
}
