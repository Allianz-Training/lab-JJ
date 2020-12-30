import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageControllerService {
  index: number;
  isLoginPage: boolean;
  constructor() {
    this.index = 0;
    this.isLoginPage = false;
  }

  setPage(idx: number) {
    this.index = idx;
  }

  getPage(): number {
    return this.index;
  }
}
