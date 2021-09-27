import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPharmacieComponent } from './detail-pharmacie.component';

describe('DetailPharmacieComponent', () => {
  let component: DetailPharmacieComponent;
  let fixture: ComponentFixture<DetailPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
