import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamochodyViewComponent } from './samochody-view.component';

describe('SamochodyViewComponent', () => {
  let component: SamochodyViewComponent;
  let fixture: ComponentFixture<SamochodyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamochodyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamochodyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
