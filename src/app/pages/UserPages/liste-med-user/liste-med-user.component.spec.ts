import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedUserComponent } from './liste-med-user.component';

describe('ListeMedUserComponent', () => {
  let component: ListeMedUserComponent;
  let fixture: ComponentFixture<ListeMedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
