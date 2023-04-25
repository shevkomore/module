import { TestBed } from '@angular/core/testing';

import { EnclosureCalculationService } from './enclosure-calculation.service';

describe('EnclosureCalculationService', () => {
  let service: EnclosureCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnclosureCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
