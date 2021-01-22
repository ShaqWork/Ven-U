import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcontentComponent } from './bookingcontent.component';

describe('BookingcontentComponent', () => {
  let component: BookingcontentComponent;
  let fixture: ComponentFixture<BookingcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
