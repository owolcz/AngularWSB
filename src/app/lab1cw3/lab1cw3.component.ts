import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1cw3',
  templateUrl: './lab1cw3.component.html',
  styleUrls: ['./lab1cw3.component.scss'],
})
export class Lab1cw3Component implements OnInit {
  constructor() {}
  title = 'projekt1';
  ngOnInit(): void {
    const x = 2;
    const y = 5;
    let wynik;
    wynik = x + y;
    console.log('Wynik dodwania: ', wynik)
    wynik = x - y;
    console.log('Wynik dodwania: ', wynik)
    wynik = x * y;
    console.log('Wynik dodwania: ', wynik)
    wynik = x / y;
    console.log('Wynik dodwania: ', wynik)
  }
}
