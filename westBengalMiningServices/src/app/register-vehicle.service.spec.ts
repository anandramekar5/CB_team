import { TestBed } from '@angular/core/testing';

import { RegisterVehicleService } from './register-vehicle.service';

describe('RegisterVehicleService', () => {
  let service: RegisterVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
