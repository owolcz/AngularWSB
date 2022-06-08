import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3cw1',
  templateUrl: './lab3cw1.component.html',
  styleUrls: ['./lab3cw1.component.scss']
})
export class Lab3cw1Component implements OnInit {


  inputText = 'Moj input';
 zmienKolor = 'color-black';
 isDisabled = true;
 statusClass = '';
 zmienUstawienia() {
 this.isDisabled = false;
 }
 onFocus() {
 this.zmienKolor = 'color-brown';
 }
 onClick(event) {
 console.log(event);
 }
 onMouseMove(event) {
 console.log('punktX: ' + event.clientX + ' punktY: ' + event.clientY);
 }
 onPaste() {
 this.inputText = 'Wklejanie zabronione!';
 }
 setActiveClass(){
   this.statusClass = 'active';
 }
 setInactiveClass(){
  this.statusClass = '';
}

  value = '';
  onEnter(value: string) { this.value = value; }


  constructor() { }

  ngOnInit(): void {

  }


}

