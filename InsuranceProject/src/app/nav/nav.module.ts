import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootbarComponent } from './footbar/footbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PageControllerService } from '../page-controller.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FootbarComponent, SidebarComponent, TopbarComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [PageControllerService],
  exports: [FootbarComponent, SidebarComponent, TopbarComponent],
})
export class NavModule {}
