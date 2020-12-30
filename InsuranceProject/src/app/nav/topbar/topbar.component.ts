import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  isMember: boolean;

  constructor(private pageService: PageControllerService) {
    this.isMember = false;
  }

  ngOnInit(): void {}

  loginClick() {
    this.pageService.isLoginPage
      ? (this.pageService.isLoginPage = false)
      : (this.pageService.isLoginPage = true);
  }
}
