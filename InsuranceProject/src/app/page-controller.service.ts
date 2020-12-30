import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageControllerService {
  index: number;
  isMember: boolean;
  isLoginPage: boolean;
  isSignUpPage: boolean;

  constructor() {
    this.index = 0;
    this.isLoginPage = false;
    this.isSignUpPage = false;
    this.isMember = false;
  }

  setPage(idx: number) {
    this.index = idx;
  }

  getPage(): number {
    return this.index;
  }
}
