import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopToEditInventoryComponent } from './pop-to-edit-inventory.component';

describe('PopToEditInventoryComponent', () => {
  let component: PopToEditInventoryComponent;
  let fixture: ComponentFixture<PopToEditInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopToEditInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopToEditInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
