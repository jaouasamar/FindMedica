import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedComponent } from './detail-med.component';

describe('DetailMedComponent', () => {
  let component: DetailMedComponent;
  let fixture: ComponentFixture<DetailMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
