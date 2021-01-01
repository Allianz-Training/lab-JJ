import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentClaimFormComponent } from './content/content-claim-form/content-claim-form.component';
import { ContentContactUsComponent } from './content/content-contact-us/content-contact-us.component';
import { ContentHistoryComponent } from './content/content-history/content-history.component';
import { ContentHomeComponent } from './content/content-home/content-home.component';
import { ContentPackageDetailComponent } from './content/content-package-detail/content-package-detail.component';
import { ContentPackageComponent } from './content/content-package/content-package.component';
import { ContentPaymentComponent } from './content/content-payment/content-payment.component';
import { ContentQaComponent } from './content/content-qa/content-qa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: ContentHomeComponent,
    //0
  },
  {
    path: 'packages',
    component: ContentPackageComponent,
    //1
  },
  {
    path: 'package/:id',
    component: ContentPackageDetailComponent,
    //11
  },
  {
    path: 'package/:id/payment',
    component: ContentPaymentComponent,
    //11p
  },
  {
    path: 'qa',
    component: ContentQaComponent,
    //2
  },
  {
    path: 'contact',
    component: ContentContactUsComponent,
    //3
  },
  {
    path: 'history',
    component: ContentHistoryComponent,
    //4
  },
  {
    path: 'claim',
    component: ContentClaimFormComponent,
    //5
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
