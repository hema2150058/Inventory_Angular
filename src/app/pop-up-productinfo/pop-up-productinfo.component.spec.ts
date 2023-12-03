import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpProductinfoComponent } from './pop-up-productinfo.component';

describe('PopUpProductinfoComponent', () => {
  let component: PopUpProductinfoComponent;
  let fixture: ComponentFixture<PopUpProductinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpProductinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpProductinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
