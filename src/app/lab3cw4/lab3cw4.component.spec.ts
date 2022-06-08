import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3cw4Component } from './lab3cw4.component';

describe('Lab3cw4Component', () => {
  let component: Lab3cw4Component;
  let fixture: ComponentFixture<Lab3cw4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3cw4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3cw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
