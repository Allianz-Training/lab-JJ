import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable,of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { PageControllerService } from 'src/app/page-controller.service';



import { ContentPackageDetailComponent } from './content-package-detail.component';


describe('ContentPackageDetailComponent', () => {
  let component: ContentPackageDetailComponent;
  let fixture: ComponentFixture<ContentPackageDetailComponent>;


  //let packaged : Package;
  beforeEach(async () => {
    // TestBed.initTestEnvironment(BrowserDynamicTestingModule,platformBrowserDynamicTesting());
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,AppModule],
      declarations: [ ContentPackageDetailComponent ],
      providers:[PageControllerService,{provide: ActivatedRoute, useValue: of({id: '1'})}]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPackageDetailComponent);
    

    // packaged=new Package(
    //   99,
    //   'Unknown Package',
    //   ['a', 'b', 'c'],
    //   '120',
    //   10000,
    //   1000
    // );
    component = fixture.componentInstance;
    // component.package=packaged;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
