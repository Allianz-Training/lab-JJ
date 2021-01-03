import { HttpClient } from '@angular/common/http';
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
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cid: ['', [Validators.minLength(13), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      telephone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  submitClick() {
    this.http
      .post('http://localhost:8080/user/addUser', {
        name: this.form.get('firstName').value,
        surname: this.form.get('lastName').value,
        citizenId: this.form.get('cid').value,
        email: this.form.get('email').value,
        password: this.form.get('password').value,
        tel: this.form.get('telephone').value,
      })
      .subscribe((result) => {
        alert('Register Success!');
        this.form.reset();
        this.pageService.isSignUpPage = false;
        (error) => {
          alert('Something wents wrong!');
        };
      });
  }

  closeClick() {
    this.pageService.isSignUpPage = false;
  }
}
