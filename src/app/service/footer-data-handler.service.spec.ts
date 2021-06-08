import { TestBed } from '@angular/core/testing';

import { FooterDataHandlerService } from './footer-data-handler.service';

describe('FooterDataHandlerService', () => {
  let service: FooterDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
