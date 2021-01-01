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
    this.packages = pageService.packages;
  }
  ngOnInit(): void {
    this.pageService.setPage(1);
  }
}
