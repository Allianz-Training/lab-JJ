import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css'],
})
export class ContentHomeComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {
    this.pageService.setPage(0);
  }
}
