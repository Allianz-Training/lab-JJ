import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageControllerService {
  index: number;
  constructor() {
    this.index = 0;
  }

  setPage(idx: number) {
    this.index = idx;
  }

  getPage(): number {
    return this.index;
  }
}
