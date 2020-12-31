import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/image.service';
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
    private imgService: ImageService
  ) {
    // this.form = this.fb.group({ tracking: ['', Validators.required] });
  }

  ngOnInit(): void {
    this.pageService.setPage(5);
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      avatar: file,
    });
    this.myForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
