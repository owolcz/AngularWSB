import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studenci-view',
  templateUrl: './studenci-view.component.html',
  styleUrls: ['./studenci-view.component.scss'],
})
export class StudenciViewComponent implements OnInit {
  @Input() studenciItems: string[] = [];
  @Output() usunStudent: EventEmitter<number> = new EventEmitter<number>();
  @Output() addStudent: EventEmitter<string> = new EventEmitter<string>();
  student: string;

  constructor() {}

  ngOnInit(): void {}

  usunStudenta(index: number) {
    this.usunStudent.emit(index);
  }

  dodajStudenta() {
    this.addStudent.emit(this.student);
    this.student = '';
  }
}
