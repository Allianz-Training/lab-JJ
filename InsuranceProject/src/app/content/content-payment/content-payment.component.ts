import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/package';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-payment',
  templateUrl: './content-payment.component.html',
  styleUrls: ['./content-payment.component.css'],
})
export class ContentPaymentComponent implements OnInit {
  package: Package;
  constructor(
    private pService: PageControllerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.package = null;
    this.route.params.subscribe((p) => {
      this.package = this.pService.getPackageById(p['id']);
      if (this.package == null) {
        alert('Invalid Package!');
        this.router.navigate(['/packages']);
      }
    });
  }

  confirmClick() {
    alert('Payment Success!');
  }

  //send Package ID and InsuranceAmount
}
