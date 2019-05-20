import { TestBed } from '@angular/core/testing';

import { MarketbuyService } from './marketbuy.service';

describe('MarketbuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketbuyService = TestBed.get(MarketbuyService);
    expect(service).toBeTruthy();
  });
});
