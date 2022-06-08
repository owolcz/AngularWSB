import { Component, OnInit } from '@angular/core';
import { Osoba } from './osoba';

@Component({
  selector: 'app-lab2cw2',
  templateUrl: './lab2cw2.component.html',
  styleUrls: ['./lab2cw2.component.scss']
})
export class Lab2cw2Component implements OnInit {

  tablica: Osoba[] = [];





  ngOnInit(): void {
    // let osoba = new Osoba();
    // osoba.id = 1;
    // osoba.imie = "Oskar";
    // osoba.nazwisko = "Wołcz";

    // this.tablica.push(osoba);
    // this.tablica.push(new Osoba(1));

    this.tablica=[new Osoba('Oskar', 62, true, 62642), new Osoba('Jan',32, false), new Osoba('Paweł', 18, true, 123123123), new Osoba('Michał', 19, true, 412312),
    new Osoba('Kamil', 19, false), new Osoba("Jędzrej", 61, false,)];
  }

}
