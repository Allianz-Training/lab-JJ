import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  isMember: boolean;

  constructor() {
    this.isMember = false;
  }

  ngOnInit(): void {}
}
