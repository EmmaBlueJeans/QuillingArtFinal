import { TestBed } from '@angular/core/testing';

import { QuillingService } from './quilling.service';

describe('QuillingService', () => {
  let service: QuillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
