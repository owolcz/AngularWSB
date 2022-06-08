import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab2cw5',
  templateUrl: './lab2cw5.component.html',
  styleUrls: ['./lab2cw5.component.scss']
})
export class Lab2cw5Component implements OnInit {
  title = 'projekt1';
  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;
  logo = '';
  htmlContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  zmienUstawienia() {
    this.inputText = 'tekst zmieniony';
    this.zmienKolor = 'color-brown';
    this.isDisabled = false;
    this.logo = 'https://cdn.jsdelivr.net/gh/maximegris/angular-electron@4b44d8bd53f19c6657c96a5558d6a187432d4e54/src/assets/icons/favicon.ico';
    this.htmlContent = '<b><i>Oskar Wołcz</i></b>'
    }

    getClass(){

      return this.zmienKolor;
    }

}
