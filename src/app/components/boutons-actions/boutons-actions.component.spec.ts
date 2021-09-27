import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsActionsComponent } from './boutons-actions.component';

describe('BoutonsActionsComponent', () => {
  let component: BoutonsActionsComponent;
  let fixture: ComponentFixture<BoutonsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
