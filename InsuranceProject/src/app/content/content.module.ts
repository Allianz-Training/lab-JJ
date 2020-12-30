import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPackageComponent } from './content-package/content-package.component';
import { HeadImageComponent } from './head-image/head-image.component';
import { ContentQaComponent } from './content-qa/content-qa.component';
import { ContentContactUsComponent } from './content-contact-us/content-contact-us.component';
import { ContentHistoryComponent } from './content-history/content-history.component';
import { ContentClaimFormComponent } from './content-claim-form/content-claim-form.component';
import { NavModule } from '../nav/nav.module';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentPackageDetailComponent } from './content-package-detail/content-package-detail.component';

@NgModule({
  declarations: [
    ContentPackageComponent,
    HeadImageComponent,
    ContentQaComponent,
    ContentContactUsComponent,
    ContentHistoryComponent,
    ContentClaimFormComponent,
    ContentHomeComponent,
    ContentPackageDetailComponent,
  ],
  imports: [CommonModule, NavModule],
  exports: [ContentPackageComponent],
})
export class ContentModule {}
