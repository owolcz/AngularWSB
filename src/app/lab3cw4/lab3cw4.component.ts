import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3cw4',
  templateUrl: './lab3cw4.component.html',
  styleUrls: ['./lab3cw4.component.scss'],
})
export class Lab3cw4Component implements OnInit {
  studenci: string[];
  isCreated = false;
  constructor() {}

  ngOnInit(): void {
    this.studenci = [
      'Karol',
      'Basia',
      'Adam',
      'Teresa',
      'Wojciech',
      'Ziemowit',
    ];
  }
  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isCreated = true;
    } else {
      this.isCreated = false;
      this.studenci.push(student);
    }
  }
  onUsunStudent(index: number) {
    this.isCreated = false;
    this.studenci.splice(index, 1);
  }






}
