import { Component, Input, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-head-image',
  templateUrl: './head-image.component.html',
  styleUrls: ['./head-image.component.css'],
})
export class HeadImageComponent implements OnInit {
  @Input()
  headTitle: string;

  index: number;
  constructor(private pageService: PageControllerService) {}

  ngOnInit(): void {
    this.index = this.pageService.getPage();
  }
}
