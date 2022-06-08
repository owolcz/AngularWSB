import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3cw3Component } from './lab3cw3.component';

describe('Lab3cw3Component', () => {
  let component: Lab3cw3Component;
  let fixture: ComponentFixture<Lab3cw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3cw3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3cw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
