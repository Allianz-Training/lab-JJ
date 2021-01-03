import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { PageControllerService } from 'src/app/page-controller.service';

import { ContentPackageDetailComponent } from './content-package-detail.component';

describe('ContentPackageDetailComponent', () => {
  let component: ContentPackageDetailComponent;
  let service: PageControllerService;
  let fixture: ComponentFixture<ContentPackageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentPackageDetailComponent],
      providers: [PageControllerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPackageDetailComponent);
    service = new PageControllerService();
    component = fixture.componentInstance;
    component.package = service.packages[0];
    fixture.detectChanges();
  });

  it('should create', inject(
    [PageControllerService],
    (provider: PageControllerService) => {
      expect(component).toBeTruthy();
    }
  ));
});
