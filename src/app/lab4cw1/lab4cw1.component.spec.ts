import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4cw1Component } from './lab4cw1.component';

describe('Lab4cw1Component', () => {
  let component: Lab4cw1Component;
  let fixture: ComponentFixture<Lab4cw1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4cw1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4cw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
