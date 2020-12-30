import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { PageControllerService } from './page-controller.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavModule } from './nav/nav.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    NavModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [PageControllerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
