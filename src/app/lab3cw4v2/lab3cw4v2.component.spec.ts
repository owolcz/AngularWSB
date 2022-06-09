import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3cw4v2Component } from './lab3cw4v2.component';

describe('Lab3cw4v2Component', () => {
  let component: Lab3cw4v2Component;
  let fixture: ComponentFixture<Lab3cw4v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3cw4v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3cw4v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
