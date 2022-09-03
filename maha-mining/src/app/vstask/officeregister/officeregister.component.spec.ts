import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeregisterComponent } from './officeregister.component';

describe('OfficeregisterComponent', () => {
  let component: OfficeregisterComponent;
  let fixture: ComponentFixture<OfficeregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
