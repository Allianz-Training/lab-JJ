import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.css'],
})
export class CurrencyCalculatorComponent implements OnInit {
  form: FormGroup;
  toAmount: number;
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      fromAmount: '',
      fromType: '',
      toType: '',
    });
  }

  ngOnInit(): void {}

  convertClick() {
    const amount = +this.form.get('fromAmount').value;
    const fromType = this.form.get('fromType').value.toUpperCase();
    const toType = this.form.get('toType').value.toUpperCase();
    console.log(amount);
    let answer: number;
    this.httpClient
      .get(
        `https://api.exchangeratesapi.io/latest?symbols=${fromType},${toType}`
      )
      .subscribe((result) => {
        answer =
          (parseFloat(result['rates'][fromType]) * amount) /
          parseFloat(result['rates'][toType]);
        this.toAmount = answer;
      });
  }
}
