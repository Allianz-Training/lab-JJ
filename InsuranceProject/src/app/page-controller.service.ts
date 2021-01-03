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
      new Package(1, 'Clothes', ['a', 'b'], '120', 2000, 200),
      new Package(2, 'Accessories', ['a', 'b', 'c'], '120', 5000, 500),
      new Package(3, 'Cosmetic', ['a', 'b', 'c', 'd'], '120', 7000, 700),
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
