import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  title: string = 'Hi';
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  addCount() {
    this.counter = this.counter + 1;
  }
}
