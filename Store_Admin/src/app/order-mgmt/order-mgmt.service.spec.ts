import { TestBed } from '@angular/core/testing';

import { OrderMgmtService } from './order-mgmt.service';

describe('OrderMgmtService', () => {
  let service: OrderMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
