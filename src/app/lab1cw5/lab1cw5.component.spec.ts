import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1cw5Component } from './lab1cw5.component';

describe('Lab1cw5Component', () => {
  let component: Lab1cw5Component;
  let fixture: ComponentFixture<Lab1cw5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab1cw5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1cw5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
