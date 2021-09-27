import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPatientComponent } from './med-patient.component';

describe('MedPatientComponent', () => {
  let component: MedPatientComponent;
  let fixture: ComponentFixture<MedPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
