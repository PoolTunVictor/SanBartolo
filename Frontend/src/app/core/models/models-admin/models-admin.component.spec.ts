import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAdminComponent } from './models-admin.component';

describe('ModelsAdminComponent', () => {
  let component: ModelsAdminComponent;
  let fixture: ComponentFixture<ModelsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
