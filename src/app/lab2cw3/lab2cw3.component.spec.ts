import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2cw3Component } from './lab2cw3.component';

describe('Lab2cw3Component', () => {
  let component: Lab2cw3Component;
  let fixture: ComponentFixture<Lab2cw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab2cw3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2cw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
