import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPackageComponent } from './content-package.component';

describe('ContentPackageComponent', () => {
  let component: ContentPackageComponent;
  let fixture: ComponentFixture<ContentPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
