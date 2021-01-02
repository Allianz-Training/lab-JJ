import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PageControllerService } from 'src/app/page-controller.service';

import { ContentPaymentComponent } from './content-payment.component';

describe('ContentPaymentComponent', () => {
  let component: ContentPaymentComponent;
  let fixture: ComponentFixture<ContentPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ContentPaymentComponent ],
      providers:[PageControllerService,{provide: ActivatedRoute, useValue: ({id: '1'})}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
