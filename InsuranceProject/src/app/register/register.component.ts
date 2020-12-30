import { Component, OnInit } from '@angular/core';
import { PageControllerService } from '../page-controller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {}

  closeClick() {
    this.pageService.isSignUpPage = false;
  }
}
