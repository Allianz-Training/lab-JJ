import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './home/top/top.component';
import { SearchBoxComponent } from './home/search-box/search-box.component';
import { MiddleNotificationComponent } from './home/middle-notification/middle-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    SearchBoxComponent,
    MiddleNotificationComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
