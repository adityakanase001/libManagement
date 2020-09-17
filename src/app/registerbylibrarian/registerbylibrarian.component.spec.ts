import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbylibrarianComponent } from './registerbylibrarian.component';

describe('RegisterbylibrarianComponent', () => {
  let component: RegisterbylibrarianComponent;
  let fixture: ComponentFixture<RegisterbylibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbylibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbylibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
