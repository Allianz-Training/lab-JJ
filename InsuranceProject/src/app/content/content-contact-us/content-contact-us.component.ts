import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-contact-us',
  templateUrl: './content-contact-us.component.html',
  styleUrls: ['./content-contact-us.component.css'],
})
export class ContentContactUsComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {
    this.pageService.setPage(3);
  }
}
