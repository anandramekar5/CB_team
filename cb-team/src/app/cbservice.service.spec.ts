import { TestBed } from '@angular/core/testing';

import { CbserviceService } from './cbservice.service';

describe('CbserviceService', () => {
  let service: CbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
