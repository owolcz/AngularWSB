import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2cw5Component } from './lab2cw5.component';

describe('Lab2cw5Component', () => {
  let component: Lab2cw5Component;
  let fixture: ComponentFixture<Lab2cw5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab2cw5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2cw5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
