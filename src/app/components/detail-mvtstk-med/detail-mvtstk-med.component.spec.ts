import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtstkMedComponent } from './detail-mvtstk-med.component';

describe('DetailMvtstkMedComponent', () => {
  let component: DetailMvtstkMedComponent;
  let fixture: ComponentFixture<DetailMvtstkMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtstkMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtstkMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
