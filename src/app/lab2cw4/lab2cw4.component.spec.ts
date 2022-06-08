import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2cw4Component } from './lab2cw4.component';

describe('Lab2cw4Component', () => {
  let component: Lab2cw4Component;
  let fixture: ComponentFixture<Lab2cw4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab2cw4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2cw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
