import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePharmacieComponent } from './page-pharmacie.component';

describe('PagePharmacieComponent', () => {
  let component: PagePharmacieComponent;
  let fixture: ComponentFixture<PagePharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
