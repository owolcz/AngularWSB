import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1cw3Component } from './lab1cw3.component';

describe('Lab1cw3Component', () => {
  let component: Lab1cw3Component;
  let fixture: ComponentFixture<Lab1cw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab1cw3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1cw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
