import { TestBed } from '@angular/core/testing';

import { NewOrdersService } from './new-orders.service';

describe('NewOrdersService', () => {
  let service: NewOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
