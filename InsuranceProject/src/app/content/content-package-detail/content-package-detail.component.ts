import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/package';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-package-detail',
  templateUrl: './content-package-detail.component.html',
  styleUrls: ['./content-package-detail.component.css'],
})
export class ContentPackageDetailComponent implements OnInit {
  package: Package;

  constructor(
    private pService: PageControllerService,
    private route: ActivatedRoute
  ) {
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

  ngOnInit(): void {
    this.package = null;
    this.route.params.subscribe((p) => {
      this.package = this.pService.getPackageById(p['id']);
      // console.log(p);
    });
  }
}
