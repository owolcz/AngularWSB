import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3cw1Component } from './lab3cw1.component';

describe('Lab3cw1Component', () => {
  let component: Lab3cw1Component;
  let fixture: ComponentFixture<Lab3cw1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3cw1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3cw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
