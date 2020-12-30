import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentClaimFormComponent } from './content/content-claim-form/content-claim-form.component';
import { ContentContactUsComponent } from './content/content-contact-us/content-contact-us.component';
import { ContentHistoryComponent } from './content/content-history/content-history.component';
import { ContentHomeComponent } from './content/content-home/content-home.component';
import { ContentPackageComponent } from './content/content-package/content-package.component';
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
    data: { animation: 'HomePage' },
    //0
  },
  {
    path: 'packages',
    component: ContentPackageComponent,
    data: { animation: 'PackagesPage' },
    //1
  },
  {
    path: 'package/:id',
    component: ContentPackageComponent,
    data: { animation: 'DetailPage' },
  },
  {
    path: 'qa',
    component: ContentQaComponent,
    data: { animation: 'QaPage' },
    //2
  },
  {
    path: 'contact',
    component: ContentContactUsComponent,
    data: { animation: 'ContactPage' },
    //3
  },
  {
    path: 'history',
    component: ContentHistoryComponent,
    data: { animation: 'HistoryPage' },
    //4
  },
  {
    path: 'claim',
    component: ContentClaimFormComponent,
    data: { animation: 'ClaimPage' },
    //5
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
