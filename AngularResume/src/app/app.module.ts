import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { ContentComponent } from './home/content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { BackendService } from './backend.service';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: ContentComponent,
    data: { index: 0 },
  },
  {
    path: 'about',
    component: ContentComponent,
    data: { index: 1 },
  },
  {
    path: 'address',
    component: ContentComponent,
    data: { index: 2 },
  },
  {
    path: 'skill',
    component: ContentComponent,
    data: { index: 3 },
  },
  {
    path: 'education',
    component: ContentComponent,
    data: { index: 4 },
  },
  {
    path: 'experience',
    component: ContentComponent,
    data: { index: 5 },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
