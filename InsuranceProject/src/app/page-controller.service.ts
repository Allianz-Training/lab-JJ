import { Injectable } from '@angular/core';
import { Package } from './package';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class PageControllerService {
  packages: Package[];
  index: number;
  isMember: boolean;
  isLoginPage: boolean;
  isSignUpPage: boolean;
  isSelectedPack: boolean;
  selectedPackage: Package;
  user: User;

  constructor() {
    this.index = 0;
    this.isLoginPage = false;
    this.isSignUpPage = false;
    this.isMember = false;
    this.isSelectedPack = false;
    this.selectedPackage = null;
    this.packages = [
      new Package(
        1,
        'A',
        [
          'Product Lost',
          'Product Damaged',
          'Insurance Coverage Limit ( 10,000 )',
          'Compensate 30% of your product price',
        ],
        '120',
        10000,
        5000,
        'The company provided 10,000 baht of insurance coverage limit for the product claim. The claim that we include are product lost and product damaged. The company will pay 30% of your product.'
      ),
      new Package(
        2,
        'B',
        [
          'Product Lost',
          'Product Damaged',
          'Insurance Coverage Limit ( 15,000 )',
          'Compensate 40% of your product price',
        ],
        '120',
        15000,
        7000,
        'The company provided 15,000 baht of insurance coverage limit for the product claim. The claim that we include are product lost and product damaged. The company will pay 40% of your product.'
      ),
      new Package(
        3,
        'C',
        [
          'Product Lost',
          'Product Damaged',
          'Insurance Coverage Limit ( 30,000 )',
          'Compensate 100% of your product price',
        ],
        '120',
        30000,
        15000,
        'The company provided 30,000 baht of insurance coverage limit for the product claim. The claim that we include are product lost and product damaged. The company will pay 100% of your product.'
      ),
    ];
    this.user = null;
  }

  setPage(idx: number) {
    this.index = idx;
  }

  getPage(): number {
    return this.index;
  }

  setCurrentPackage(p: Package) {
    this.isSelectedPack;
    this.selectedPackage = p;
  }

  getPackageById(id: number): Package {
    for (let p of this.packages) {
      if (p.id == id) {
        return p;
      }
    }
    return null;
  }
}
