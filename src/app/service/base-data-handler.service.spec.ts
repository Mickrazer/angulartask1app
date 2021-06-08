import { TestBed } from '@angular/core/testing';

import { BaseDataHandlerService } from './base-data-handler.service';

describe('BaseDataHandlerService', () => {
  let service: BaseDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
