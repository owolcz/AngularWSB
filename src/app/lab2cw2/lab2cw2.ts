import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2cw2Component } from './lab2cw2.component';

describe('OsobaComponent', () => {
  let component: Lab2cw2Component;
  let fixture: ComponentFixture<Lab2cw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab2cw2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2cw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
