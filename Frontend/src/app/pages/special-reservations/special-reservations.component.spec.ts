import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialReservationsComponent } from './special-reservations.component';

describe('SpecialReservationsComponent', () => {
  let component: SpecialReservationsComponent;
  let fixture: ComponentFixture<SpecialReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
