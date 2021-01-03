import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private pService: PageControllerService) {}

  ngOnInit(): void {}

  getCurrentPage(): number {
    return this.pService.getPage();
  }
}
