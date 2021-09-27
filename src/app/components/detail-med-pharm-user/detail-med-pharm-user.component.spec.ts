import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedPharmUserComponent } from './detail-med-pharm-user.component';

describe('DetailMedPharmUserComponent', () => {
  let component: DetailMedPharmUserComponent;
  let fixture: ComponentFixture<DetailMedPharmUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMedPharmUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMedPharmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
