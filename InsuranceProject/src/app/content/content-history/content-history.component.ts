import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-history',
  templateUrl: './content-history.component.html',
  styleUrls: ['./content-history.component.css'],
})
export class ContentHistoryComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {
    this.pageService.setPage(4);
  }
}
