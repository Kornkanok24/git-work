import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingpostComponent } from './trackingpost.component';

describe('TrackingpostComponent', () => {
  let component: TrackingpostComponent;
  let fixture: ComponentFixture<TrackingpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingpostComponent]
    });
    fixture = TestBed.createComponent(TrackingpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
