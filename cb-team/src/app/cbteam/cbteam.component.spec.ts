import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbteamComponent } from './cbteam.component';

describe('CbteamComponent', () => {
  let component: CbteamComponent;
  let fixture: ComponentFixture<CbteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
