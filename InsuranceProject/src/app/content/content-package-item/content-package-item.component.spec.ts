import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPackageItemComponent } from './content-package-item.component';

describe('ContentPackageItemComponent', () => {
  let component: ContentPackageItemComponent;
  let fixture: ComponentFixture<ContentPackageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPackageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
