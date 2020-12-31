import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-package-item',
  templateUrl: './content-package-item.component.html',
  styleUrls: ['./content-package-item.component.css'],
})
export class ContentPackageItemComponent implements OnInit {
  @Input()
  packID: number;
  linkToDetail: string;
  constructor() {}

  ngOnInit() {
    this.linkToDetail = '/package/' + this.packID.toString();
  }
}
