import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3cw2',
  templateUrl: './lab3cw2.component.html',
  styleUrls: ['./lab3cw2.component.scss']
})
export class Lab3cw2Component implements OnInit {
  imie = '';
  nazwisko = '';
  wiek = 22;

  value = '';
  value1 = '';
  value2;
  onEnter(value?: string, value1?: string, value2?: number) { this.value = value; this.value1 = value1; this.value2 = value2 }
  constructor() { }

  ngOnInit(): void {
  }

}
