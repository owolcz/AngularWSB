import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4cw2',
  templateUrl: './lab4cw2.component.html',
  styleUrls: ['./lab4cw2.component.scss'],
})
export class Lab4cw2Component implements OnInit {
  osoba: Osoba;
  wiek = [...Array(82).keys()].map((x) => x + 18);
  dniTygodnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  constructor() {}

  ngOnInit(): void {
    this.osoba = new Osoba();
    this.osoba.imie = 'Tomasz';
    this.osoba.czyStudent = true;
    this.osoba.wiek = 57;
    this.osoba.gender = 'male';
    this.osoba.email = "";
    this.osoba.dniTygodnia = "Poniedziałek";
  }
  sendForm(): void {
    console.log('osoba:', this.osoba);
  }
}
export class Osoba {
  imie: string;
  nazwisko: string;
  wiek: number;
  czyStudent: boolean;
  opis: string;
  gender: string;
  email: string;
  dniTygodnia: string;
}
