import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { Lab2cw2Component } from './lab2cw2/lab2cw2.component';
import { Lab2cw3Component } from './lab2cw3/lab2cw3.component';
import { Lab2cw4Component } from './lab2cw4/lab2cw4.component';
import { Lab2cw5Component } from './lab2cw5/lab2cw5.component';
import { Lab3cw1Component } from './lab3cw1/lab3cw1.component';
import { Lab3cw2Component } from './lab3cw2/lab3cw2.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    KontaktComponent,
    Lab2cw2Component,
    Lab2cw3Component,
    Lab2cw4Component,
    Lab2cw5Component,
    Lab3cw1Component,
    Lab3cw2Component,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
