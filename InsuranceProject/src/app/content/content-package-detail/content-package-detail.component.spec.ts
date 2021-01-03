import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs';
import { AppModule } from 'src/app/app.module';
import { PageControllerService } from 'src/app/page-controller.service';
import {mock} from 'ts-mockito';
import { ContentPackageDetailComponent } from './content-package-detail.component';

describe('ContentPackageDetailComponent', () => {
  class MockActivatedRoute {
    params = jasmine.createSpy('params');
  }

  let component: ContentPackageDetailComponent;
  let fixture: ComponentFixture<ContentPackageDetailComponent>;
  let pageControllerService:PageControllerService;
  const pageControllerServiceMock: PageControllerService = mock(PageControllerService);
 


  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,AppModule],
      declarations: [ ContentPackageDetailComponent ],
      providers:[{provide:PageControllerService,useValue:pageControllerServiceMock},{provide: ActivatedRoute, useValue: ({id: '1'})},{provide: ActivatedRoute, useClass: MockActivatedRoute}]
      
    })
    .compileComponents();
    (() => {
      fixture = TestBed.createComponent(ContentPackageDetailComponent);
      component = fixture.componentInstance;
  
      pageControllerService = TestBed.get(PageControllerService);
 
  
      fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPackageDetailComponent);
 
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});})
