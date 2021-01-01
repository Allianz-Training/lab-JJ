import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/package';

@Component({
  selector: 'app-content-package-detail',
  templateUrl: './content-package-detail.component.html',
  styleUrls: ['./content-package-detail.component.css'],
})
export class ContentPackageDetailComponent implements OnInit {
  package: Package;
  id: number;
  constructor() {
    if (this.package == null) {
      this.package = new Package(
        99,
        'Unknown Package',
        ['a', 'b', 'c'],
        '120',
        1000
      );
    }
  }

  ngOnInit(): void {}
}
