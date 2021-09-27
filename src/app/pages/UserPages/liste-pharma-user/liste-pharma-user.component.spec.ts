import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePharmaUserComponent } from './liste-pharma-user.component';

describe('ListePharmaUserComponent', () => {
  let component: ListePharmaUserComponent;
  let fixture: ComponentFixture<ListePharmaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePharmaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePharmaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
