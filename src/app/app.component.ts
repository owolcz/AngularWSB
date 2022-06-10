import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { DaneOsobowe } from './dane-osobowe';
import { Osoba } from './lab2cw2/osoba';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  tekstWZmiennej = 'To jest tekst z pola z pliku .ts';
  samochody = ['Audi', 'BMW', 'Mercedes'];

  ngOnInit(): void {

  }




}



