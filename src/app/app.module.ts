import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { Lab2cw2Component } from './lab2cw2/lab2cw2.component';
import { Lab2cw3Component } from './lab2cw3/lab2cw3.component';
import { Lab2cw4Component } from './lab2cw4/lab2cw4.component';
import { Lab2cw5Component } from './lab2cw5/lab2cw5.component';
import { Lab3cw1Component } from './lab3cw1/lab3cw1.component';
import { Lab3cw2Component } from './lab3cw2/lab3cw2.component';
import { Lab3cw3Component } from './lab3cw3/lab3cw3.component';
import { StudenciViewComponent } from './studenci-view/studenci-view.component';
import { SamochodyComponent } from './samochody/samochody.component';
import { Lab3cw4Component } from './lab3cw4/lab3cw4.component';


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
    Lab3cw3Component,
    StudenciViewComponent,
    SamochodyComponent,
    Lab3cw4Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
