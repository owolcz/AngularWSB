import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1cw4Component } from './lab1cw4.component';

describe('Lab1cw4Component', () => {
  let component: Lab1cw4Component;
  let fixture: ComponentFixture<Lab1cw4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab1cw4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1cw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
