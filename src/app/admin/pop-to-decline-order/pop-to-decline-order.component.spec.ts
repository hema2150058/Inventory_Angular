import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopToDeclineOrderComponent } from './pop-to-decline-order.component';

describe('PopToDeclineOrderComponent', () => {
  let component: PopToDeclineOrderComponent;
  let fixture: ComponentFixture<PopToDeclineOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopToDeclineOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopToDeclineOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
