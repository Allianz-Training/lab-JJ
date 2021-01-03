import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PageControllerService } from 'src/app/page-controller.service';
import { ContentPaymentComponent } from './content-payment.component';
import {mock} from 'ts-mockito';
import { AppModule } from 'src/app/app.module';

describe('ContentPaymentComponent', () => {

  class MockActivatedRoute {
    params = jasmine.createSpy('params');
  }
  let component: ContentPaymentComponent;
  let fixture: ComponentFixture<ContentPaymentComponent>;
  let pageControllerService : PageControllerService;
  const pageControllerServiceMock : PageControllerService = mock(PageControllerService);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,AppModule],
      declarations: [ ContentPaymentComponent ],
      providers:[{provide:PageControllerService,useValue:pageControllerServiceMock},{provide: ActivatedRoute, useValue: ({id: '1'})},{provide: ActivatedRoute, useClass: MockActivatedRoute}]
    })
    .compileComponents();
    (() => {
      fixture = TestBed.createComponent(ContentPaymentComponent);
      component = fixture.componentInstance;
  
      pageControllerService = TestBed.get(PageControllerService);
 
  
      fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});})
