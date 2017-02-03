import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';


import { MaterialModule } from '@angular/material';
const appRoutes: Routes = [
  { path: 'help', component: HelpPage },
  { path: '', component: HomePage }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( appRoutes, { useHash: !history.pushState }),
    MaterialModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


