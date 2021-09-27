import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellepharmaComponent } from './nouvellepharma.component';

describe('NouvellepharmaComponent', () => {
  let component: NouvellepharmaComponent;
  let fixture: ComponentFixture<NouvellepharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellepharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvellepharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
