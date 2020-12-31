import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-payment',
  templateUrl: './content-payment.component.html',
  styleUrls: ['./content-payment.component.css'],
})
export class ContentPaymentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  confirmClick() {
    alert('Payment Success!');
  }
}
