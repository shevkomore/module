import { TestBed } from '@angular/core/testing';

import { EnclosureDataService } from './enclosure-data.service';

describe('EnclosureDataService', () => {
  let service: EnclosureDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnclosureDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
