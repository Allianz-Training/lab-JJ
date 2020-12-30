import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-claim-form',
  templateUrl: './content-claim-form.component.html',
  styleUrls: ['./content-claim-form.component.css'],
})
export class ContentClaimFormComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {
    this.pageService.setPage(5);
  }
}
