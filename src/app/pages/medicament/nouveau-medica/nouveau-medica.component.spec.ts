import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMedicaComponent } from './nouveau-medica.component';

describe('NouveauMedicaComponent', () => {
  let component: NouveauMedicaComponent;
  let fixture: ComponentFixture<NouveauMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
