import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPackageDetailComponent } from './content-package-detail.component';

describe('ContentPackageDetailComponent', () => {
  let component: ContentPackageDetailComponent;
  let fixture: ComponentFixture<ContentPackageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentPackageDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
