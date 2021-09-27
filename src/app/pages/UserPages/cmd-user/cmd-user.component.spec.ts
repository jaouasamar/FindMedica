import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdUserComponent } from './cmd-user.component';

describe('CmdUserComponent', () => {
  let component: CmdUserComponent;
  let fixture: ComponentFixture<CmdUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
