import { Component, OnInit } from '@angular/core';
import { Osoba } from './osoba';

@Component({
  selector: 'app-lab2cw4',
  templateUrl: './lab2cw4.component.html',
  styleUrls: ['./lab2cw4.component.scss']
})
export class Lab2cw4Component implements OnInit {

  osoby: Osoba[] = [];
 dodajOsoby() {
 this.osoby = [
 new Osoba('Kasia', 'Nowak', 24),
 new Osoba('Tomasz', null, 66),
 new Osoba('Andrzej', 'Wolny', 36)
 ];
 }
 usunOsoby() {
 this.osoby = [];

 }


  constructor() { }

  ngOnInit(): void {
  }



}
