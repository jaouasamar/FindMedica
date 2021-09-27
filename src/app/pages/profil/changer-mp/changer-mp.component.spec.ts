import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMPComponent } from './changer-mp.component';

describe('ChangerMPComponent', () => {
  let component: ChangerMPComponent;
  let fixture: ComponentFixture<ChangerMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
