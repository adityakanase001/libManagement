import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBookcopyComponent } from './return-bookcopy.component';

describe('ReturnBookcopyComponent', () => {
  let component: ReturnBookcopyComponent;
  let fixture: ComponentFixture<ReturnBookcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnBookcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnBookcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
