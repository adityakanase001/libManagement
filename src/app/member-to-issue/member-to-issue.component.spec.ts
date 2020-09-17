import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberToIssueComponent } from './member-to-issue.component';

describe('MemberToIssueComponent', () => {
  let component: MemberToIssueComponent;
  let fixture: ComponentFixture<MemberToIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberToIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberToIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
