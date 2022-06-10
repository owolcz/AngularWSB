import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab4cw4',
  templateUrl: './lab4cw4.component.html',
  styleUrls: ['./lab4cw4.component.scss'],
})
export class Lab4cw4Component implements OnInit {
  osoba: Osoba;
  osobaForm: FormGroup;
  EMAIL = 'email';
  wiek = [...Array(82).keys()].map((x) => x + 18);
  staz = ['0-1', '1-3', '3-5', '5+'];
  // wypełnienie tablicy numerami od 18 do 99

  constructor() {}

  ngOnInit(): void {
    this.intData();
    this.initForm();
  }
  initForm(): void {
    this.osobaForm = new FormGroup({
      imie: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      nazwisko: new FormControl('Kowalski'),
      email: new FormControl(null, [Validators.required, Validators.email]),
      wiek: new FormControl(null, Validators.required),
      czyStudent: new FormControl(null, Validators.required),
      opis: new FormControl(this.osoba.opis),
      gender: new FormControl(true, Validators.required),
      zawod: new FormControl(null, Validators.required),
      staz: new FormControl(null, Validators.required)
    });
  }
  intData(): void {
    this.wiek.unshift(null); // dodaje element null na 1 pozycję tablicy
    this.osoba = new Osoba();
    this.osoba.opis = 'przykladowy opis';
  }
  onSubmit(): void {
    console.log('osobaForm:', this.osobaForm);
  }
}

export class Osoba {
  imie: string;
  nazwisko: string;
  email: string;
  wiek: number;
  czyStudent: boolean;
  opis: string;
  gender: string;
  zawod: string;
}
