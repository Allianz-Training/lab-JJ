import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {}

  memberState(): boolean {
    return this.pageService.isMember;
  }
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
  logOutClick() {
    this.pageService.isMember = false;
    this.pageService.user = null;
    alert('Logged out');
  }
}
