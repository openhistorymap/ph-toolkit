import { TestBed } from '@angular/core/testing';

import { OhmPhService } from './ohm-ph.service';

describe('OhmPhService', () => {
  let service: OhmPhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhmPhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
