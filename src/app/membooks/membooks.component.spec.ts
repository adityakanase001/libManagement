import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembooksComponent } from './membooks.component';

describe('MembooksComponent', () => {
  let component: MembooksComponent;
  let fixture: ComponentFixture<MembooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
