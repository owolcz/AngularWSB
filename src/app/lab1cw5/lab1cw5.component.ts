import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1cw5',
  templateUrl: './lab1cw5.component.html',
  styleUrls: ['./lab1cw5.component.scss'],
})
export class Lab1cw5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const imie = 'Oskar';
    const nazwisko = 'Wołcz';
    const wiek = 22;

    console.log(this.Dane(imie, nazwisko, wiek));
    console.log(this.Dane(imie, nazwisko));

    console.log(this.Suma(22, 100));
  }

  Suma(liczba1: number, liczba2: number): number {
    return liczba1 + liczba2;
  }

  Dane(imie: string, nazwisko: string, wiek?: number) {
    if (wiek) {
      return imie + ' ' + nazwisko + ' ' + wiek;
    } else {
      return imie + ' ' + nazwisko;
    }
  }
}
