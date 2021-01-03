import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageControllerService } from '../page-controller.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private pageService: PageControllerService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  loginClick() {
    this.http
      .post('http://localhost:8080/login', {
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      })
      .subscribe(
        (p) => {
          alert('Login Success');
          this.form.reset();
          this.pageService.isLoginPage = false;
          this.pageService.isMember = true;
          this.pageService.user = new User(
            p['userId'],
            p['name'],
            p['surname'],
            p['citizenId'],
            p['email'],
            p['password'],
            p['tel']
          );
        },
        (error) => {
          alert('Wrong username or password.');
          this.form.setValue({
            email: this.form.get('email').value,
            password: '',
          });
        }
      );
  }

  signUpClick() {
    this.pageService.isLoginPage = false;
    this.pageService.isSignUpPage = true;
  }
  closeClick() {
    this.pageService.isLoginPage = false;
  }
}
