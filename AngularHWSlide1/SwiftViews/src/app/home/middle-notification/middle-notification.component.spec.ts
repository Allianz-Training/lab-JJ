import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleNotificationComponent } from './middle-notification.component';

describe('MiddleNotificationComponent', () => {
  let component: MiddleNotificationComponent;
  let fixture: ComponentFixture<MiddleNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
