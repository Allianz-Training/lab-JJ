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
    this.isMember = this.pageService.isMember;
  }

  ngOnInit(): void {}

  loginClick() {
    this.pageService.isLoginPage
      ? (this.pageService.isLoginPage = false)
      : (this.pageService.isLoginPage = true);
  }
  signUpClick() {
    this.pageService.isSignUpPage
      ? (this.pageService.isSignUpPage = false)
      : (this.pageService.isSignUpPage = true);
  }
}
