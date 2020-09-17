import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDefaultComponent } from './lib-default.component';

describe('LibDefaultComponent', () => {
  let component: LibDefaultComponent;
  let fixture: ComponentFixture<LibDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
