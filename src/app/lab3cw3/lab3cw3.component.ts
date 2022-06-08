import { Samochod } from './../samochody/samochod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3cw3',
  templateUrl: './lab3cw3.component.html',
  styleUrls: ['./lab3cw3.component.scss']
})
export class Lab3cw3Component implements OnInit {

  studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];


  title = "Moje samochody";
  samochody = [new Samochod("Audi", "A4", 2022), new Samochod("BMW", "X4", 2018), new Samochod("Mercedes", "GLE", 2017)]
  constructor() { }

  ngOnInit(): void {
  }

}
