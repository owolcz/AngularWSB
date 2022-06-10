import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4cw3Component } from './lab4cw3.component';

describe('Lab4cw3Component', () => {
  let component: Lab4cw3Component;
  let fixture: ComponentFixture<Lab4cw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4cw3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4cw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
