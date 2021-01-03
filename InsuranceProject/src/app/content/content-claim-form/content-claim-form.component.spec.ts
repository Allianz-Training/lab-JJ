import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentClaimFormComponent } from './content-claim-form.component';

describe('ContentClaimFormComponent', () => {
  let component: ContentClaimFormComponent;
  let fixture: ComponentFixture<ContentClaimFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentClaimFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
