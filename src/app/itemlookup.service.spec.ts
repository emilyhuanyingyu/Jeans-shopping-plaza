import { TestBed } from '@angular/core/testing';

import { ItemlookupService } from './itemlookup.service';

describe('ItemlookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemlookupService = TestBed.get(ItemlookupService);
    expect(service).toBeTruthy();
  });
});
