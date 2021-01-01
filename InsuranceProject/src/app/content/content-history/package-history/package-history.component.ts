import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.css'],
})
export class PackageHistoryComponent implements OnInit {
  claims: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadClaims();
  }

  loadClaims() {
    this.claims = [];
    // Test Get Method
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result) => {
        this.claims = result as any[];
      });
  }
}
