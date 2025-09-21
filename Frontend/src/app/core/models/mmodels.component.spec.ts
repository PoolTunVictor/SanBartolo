import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmodelsComponent } from './mmodels.component';

describe('MmodelsComponent', () => {
  let component: MmodelsComponent;
  let fixture: ComponentFixture<MmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmodelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
