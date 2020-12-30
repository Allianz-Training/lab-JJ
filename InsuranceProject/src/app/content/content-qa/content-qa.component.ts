import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-qa',
  templateUrl: './content-qa.component.html',
  styleUrls: ['./content-qa.component.css'],
})
export class ContentQaComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {
    this.pageService.setPage(2);
  }
}
