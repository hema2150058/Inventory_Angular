import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopForAddInvComponent } from './pop-for-add-inv.component';

describe('PopForAddInvComponent', () => {
  let component: PopForAddInvComponent;
  let fixture: ComponentFixture<PopForAddInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopForAddInvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopForAddInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
