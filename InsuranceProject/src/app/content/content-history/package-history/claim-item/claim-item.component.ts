import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-item',
  templateUrl: './claim-item.component.html',
  styleUrls: ['./claim-item.component.css'],
})
export class ClaimItemComponent implements OnInit {
  @Input()
  claim: any;

  constructor() {
    if (this.claim == null) {
      this.claim = { id: 99, title: 'unknow' };
    }
  }

  ngOnInit(): void {}
}
