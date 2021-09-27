import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisClsFrsComponent } from './detalis-cls-frs.component';

describe('DetalisClsFrsComponent', () => {
  let component: DetalisClsFrsComponent;
  let fixture: ComponentFixture<DetalisClsFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisClsFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalisClsFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
