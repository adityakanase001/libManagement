import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePerMemberComponent } from './issue-per-member.component';

describe('IssuePerMemberComponent', () => {
  let component: IssuePerMemberComponent;
  let fixture: ComponentFixture<IssuePerMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuePerMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuePerMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
