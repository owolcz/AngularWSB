import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SamochodyViewComponent } from './samochody-view/samochody-view.component';
import { Lab3cw4v2Component } from './lab3cw4v2/lab3cw4v2.component';
import { Lab4cw1Component } from './lab4cw1/lab4cw1.component';
import { AppChild2Component } from './app-child2/app-child2.component';
import { Lab4cw2Component } from './lab4cw2/lab4cw2.component';
import { Lab4cw3Component } from './lab4cw3/lab4cw3.component';
import { Lab4cw4Component } from './lab4cw4/lab4cw4.component';
import { Lab1cw3Component } from './lab1cw3/lab1cw3.component';
import { Lab1cw4Component } from './lab1cw4/lab1cw4.component';
import { Lab1cw5Component } from './lab1cw5/lab1cw5.component';


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
    SamochodyViewComponent,
    Lab3cw4v2Component,
    Lab4cw1Component,
    AppChild2Component,
    Lab4cw2Component,
    Lab4cw3Component,
    Lab4cw4Component,
    Lab1cw3Component,
    Lab1cw4Component,
    Lab1cw5Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
