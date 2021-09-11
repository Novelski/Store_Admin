import { TestBed } from '@angular/core/testing';

import { OrderCancelledService } from './order-cancelled.service';

describe('OrderCancelledService', () => {
  let service: OrderCancelledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCancelledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
