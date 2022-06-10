import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4cw2Component } from './lab4cw2.component';

describe('Lab4cw2Component', () => {
  let component: Lab4cw2Component;
  let fixture: ComponentFixture<Lab4cw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4cw2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4cw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
