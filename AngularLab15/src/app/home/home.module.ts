import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, MainContentComponent, HomeComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavbarComponent, MainContentComponent, HomeComponent],
})
export class HomeModule {}
