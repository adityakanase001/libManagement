import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedListComponent } from './issued-list.component';

describe('IssuedListComponent', () => {
  let component: IssuedListComponent;
  let fixture: ComponentFixture<IssuedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
