import { TestBed } from '@angular/core/testing';

import { DetailedDataHandlerService } from './detailed-data-handler.service';

describe('DetailedDataHandlerService', () => {
  let service: DetailedDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
