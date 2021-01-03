import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-claim-form',
  templateUrl: './content-claim-form.component.html',
  styleUrls: ['./content-claim-form.component.css'],
})
export class ContentClaimFormComponent implements OnInit {
  imageURL: string;
  myForm: FormGroup;
  constructor(
    private pageService: PageControllerService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      company: ['1', Validators.required],
      tracking: ['', Validators.required],
      price: ['', Validators.required],
      package: ['', Validators.required],
      productImage: [null],
    });
  }

  ngOnInit(): void {
    this.pageService.setPage(5);
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      productImage: file,
    });
    this.myForm.get('productImage').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(file);
  }
}

// If cannot show the preivew image : npm install @angular/cli -g
