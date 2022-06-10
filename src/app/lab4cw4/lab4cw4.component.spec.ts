import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4cw4Component } from './lab4cw4.component';

describe('Lab4cw4Component', () => {
  let component: Lab4cw4Component;
  let fixture: ComponentFixture<Lab4cw4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4cw4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4cw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
