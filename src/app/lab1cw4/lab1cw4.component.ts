import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1cw4',
  templateUrl: './lab1cw4.component.html',
  styleUrls: ['./lab1cw4.component.scss'],
})
export class Lab1cw4Component implements OnInit {
  liczba1= 5; // trzeba przypisać wartości
  liczba2 = 4;
  tekst1 =  'Oskar 62642'; // trzeba przypisać wartości
  tekst2 = 'Ala ma kota';
  isPrawda1 = true; // trzeba przypisać wartości
  isPrawda2 = false;
  coKolwiek: any;
  aktualnaGodzina: Date = new Date(); // aktualny czas
  tablica1: Array<number> = new Array<number>();
  tablica2: Array<string> = new Array<string>('Kot', 'Pies', 'Mysz'); // trzeba przypisać wartości
  tablica3: number[] = [1, 2, 4, 4, 7]; // number[] równoważny z Array<number>
  tablica4: string[] = ['Oskar', '62642', 'WZ_ININ3']; // trzeba przypisać wartości
  tablicaAny1: Array<any> = new Array<any>();
  tablicaAny2 = [1, 'aaa', true, false, 555, null];
  constructor() {}

  ngOnInit(): void {

    // this.liczba1 = 99.4;
    // this.tekst1 = 'Kot ma Alę';
    console.log('liczba1', this.liczba1);
    console.log('liczba2', this.liczba2);
    console.log('tekst1', this.tekst1);
    console.log('tekst2', this.tekst2);
    console.log('Czy prawda', this.isPrawda1);
    console.log('Czy prawda', this.isPrawda2);
    console.log('Tablica 1:', this.tablica1);
    console.log('Tablica 2:', this.tablica2);
    console.log('Tablica 3:', this.tablica3);
    console.log('Tablica 4:', this.tablica4);
    console.log('tekst2', this.tekst2);
    console.log('Tablica Any2:', this.tablicaAny2);
    this.coKolwiek = false;
    console.log('coKolwiek', this.coKolwiek);
    this.coKolwiek = 11;
    console.log('coKolwiek', this.coKolwiek);
  }
}
