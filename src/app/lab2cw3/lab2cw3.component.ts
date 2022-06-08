import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab2cw3',
  templateUrl: './lab2cw3.component.html',
  styleUrls: ['./lab2cw3.component.scss']
})
export class Lab2cw3Component implements OnInit {


  title = 'Dni tygodnia';
 dniTygodnia = [
 'poniedziałek',
 'wtorek',
 'środa',
 'czwartek',
 'piątek',
 'sobota',
 'niedziela'
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
