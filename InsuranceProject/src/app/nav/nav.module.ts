import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootbarComponent } from './footbar/footbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PageControllerService } from '../page-controller.service';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FootbarComponent, SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [PageControllerService],
  exports: [FootbarComponent, SidebarComponent, TopbarComponent],
})
export class NavModule {}
