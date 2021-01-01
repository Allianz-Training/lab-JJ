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
      telephone: [''],
    });
  }

  ngOnInit(): void {}

  submitClick() {
    //Real Post Method
    // const newUser = this.form.value;
    // this.http.post('https', newUser).subscribe((result) => {
    //   this.form.reset();
    //   alert('Register Success!');
    //   this.pageService.isSignUpPage = false;
    // });

    //Test Post Method
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: 'hi',
        body: 'hihihi',
      })
      .subscribe((result) => {
        console.log(result);
        this.form.reset();
        alert('Test Success!');
      });
  }

  closeClick() {
    this.pageService.isSignUpPage = false;
  }
}
