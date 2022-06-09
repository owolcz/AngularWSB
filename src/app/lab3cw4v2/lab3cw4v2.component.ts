import { Samochod } from './../samochody/samochod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3cw4v2',
  templateUrl: './lab3cw4v2.component.html',
  styleUrls: ['./lab3cw4v2.component.scss'],
})
export class Lab3cw4v2Component implements OnInit {
  auta: any[];
  isCreated = false;
  ngOnInit(): void {
    this.auta = [
      'Mercedes',
      'BMW',
      'Audi',
      'Skoda',
      'Volkswagen',
    ];
  }
  onAddAuto(auto: string) {
    if (this.auta.includes(auto)) {
      this.isCreated = true;
    } else {
      this.isCreated = false;
      this.auta.push(auto);
    }
  }
  onUsunAuto(index: number) {
    this.isCreated = false;
    this.auta.splice(index, 1);
  }
}
