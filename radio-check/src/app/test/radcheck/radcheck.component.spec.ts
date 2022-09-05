import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadcheckComponent } from './radcheck.component';

describe('RadcheckComponent', () => {
  let component: RadcheckComponent;
  let fixture: ComponentFixture<RadcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
