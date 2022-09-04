import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseFormComponent } from './expertise-form.component';

describe('ExpertiseFormComponent', () => {
  let component: ExpertiseFormComponent;
  let fixture: ComponentFixture<ExpertiseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
