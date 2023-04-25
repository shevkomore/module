import { TestBed } from '@angular/core/testing';

import { EnclosureSelectionService } from './enclosure-selection.service';

describe('EnclosureSelectionService', () => {
  let service: EnclosureSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnclosureSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
