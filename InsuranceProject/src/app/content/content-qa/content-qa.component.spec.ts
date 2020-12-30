import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentQaComponent } from './content-qa.component';

describe('ContentQaComponent', () => {
  let component: ContentQaComponent;
  let fixture: ComponentFixture<ContentQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
