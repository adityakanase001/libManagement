import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeMembershipComponent } from './take-membership.component';

describe('TakeMembershipComponent', () => {
  let component: TakeMembershipComponent;
  let fixture: ComponentFixture<TakeMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
