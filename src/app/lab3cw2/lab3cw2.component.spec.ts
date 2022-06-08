import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3cw2Component } from './lab3cw2.component';

describe('Lab3cw2Component', () => {
  let component: Lab3cw2Component;
  let fixture: ComponentFixture<Lab3cw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3cw2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3cw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
