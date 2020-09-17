import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAvailabilityComponent } from './book-availability.component';

describe('BookAvailabilityComponent', () => {
  let component: BookAvailabilityComponent;
  let fixture: ComponentFixture<BookAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
