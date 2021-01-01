import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Package } from 'src/app/package';

@Component({
  selector: 'app-content-package-item',
  templateUrl: './content-package-item.component.html',
  styleUrls: ['./content-package-item.component.css'],
})
export class ContentPackageItemComponent implements OnInit {
  @Input()
  package: Package;

  linkToDetail: string;
  constructor() {
    if (this.package == null) {
      this.package = new Package(
        99,
        'Unknown Package',
        ['a', 'b', 'c'],
        '120',
        10000,
        1000
      );
    }
  }

  ngOnInit() {
    this.linkToDetail = '/package/' + this.package.id.toString();
  }
}
