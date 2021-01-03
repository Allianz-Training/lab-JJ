import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-history',
  templateUrl: './content-history.component.html',
  styleUrls: ['./content-history.component.css'],
})
export class ContentHistoryComponent implements OnInit {
  constructor(
    private pageService: PageControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.pageService.isMember) {
      alert('Please login firstly');
      this.router.navigate(['/home']);
    }
    this.pageService.setPage(4);
  }
}
