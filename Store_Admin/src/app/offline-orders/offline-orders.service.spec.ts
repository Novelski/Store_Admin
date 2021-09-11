import { TestBed } from '@angular/core/testing';

import { OfflineOrdersService } from './offline-orders.service';

describe('OfflineOrdersService', () => {
  let service: OfflineOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
