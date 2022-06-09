import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-samochody-view',
  templateUrl: './samochody-view.component.html',
  styleUrls: ['./samochody-view.component.scss'],
})
export class SamochodyViewComponent implements OnInit {
  @Input() autaItems: any[] = [];
  @Output() deletAuto: EventEmitter<number> = new EventEmitter<number>();
  @Output() addAuto: EventEmitter<string> = new EventEmitter<string>();
  auto: string;
  constructor() {}

  ngOnInit(): void {}

  usunAuto(index: number) {
    this.deletAuto.emit(index);
  }
  dodajAuto() {
    this.addAuto.emit(this.auto);
    this.auto = '';
  }
}
