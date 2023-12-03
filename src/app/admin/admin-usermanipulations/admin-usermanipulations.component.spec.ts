import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsermanipulationsComponent } from './admin-usermanipulations.component';

describe('AdminUsermanipulationsComponent', () => {
  let component: AdminUsermanipulationsComponent;
  let fixture: ComponentFixture<AdminUsermanipulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsermanipulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsermanipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
