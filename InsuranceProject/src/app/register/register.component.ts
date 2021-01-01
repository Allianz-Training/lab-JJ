import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageControllerService } from '../page-controller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private pageService: PageControllerService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cid: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      telephone: [''],
    });
  }

  ngOnInit(): void {}

  closeClick() {
    this.pageService.isSignUpPage = false;
  }
}
