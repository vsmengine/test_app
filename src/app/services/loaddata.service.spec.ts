import { TestBed } from '@angular/core/testing';

import { ScrollserviceService } from './loaddata.service';

describe('ScrollserviceService', () => {
  let service: ScrollserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
