import { Component, OnInit } from '@angular/core';
import { PageControllerService } from '../page-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {}

  signUpClick() {
    this.pageService.isLoginPage = false;
    this.pageService.isSignUpPage = true;
  }
  closeClick() {
    this.pageService.isLoginPage = false;
  }
}
