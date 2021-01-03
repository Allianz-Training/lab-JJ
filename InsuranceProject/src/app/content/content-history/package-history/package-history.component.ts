import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/package';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.css'],
})
export class PackageHistoryComponent implements OnInit {
  package: Package;
  claims: any;
  constructor(
    private http: HttpClient,
    private pageService: PageControllerService
  ) {}

  ngOnInit(): void {
    this.package = this.pageService.getPackageById(1);
    this.loadClaims();
  }

  loadClaims() {
    this.claims = [];
    this.http
      .get('http://localhost:8080/user/findAllUsers')
      .subscribe((result) => {
        this.claims = result as any[];
      });
  }
}
