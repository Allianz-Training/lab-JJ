import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageControllerService } from './page-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'InsuranceProject';

  constructor(public pageService: PageControllerService) {}
}
