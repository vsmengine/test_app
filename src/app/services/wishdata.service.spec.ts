import { TestBed } from '@angular/core/testing';

import { WishdataService } from './wishdata.service';

describe('WishdataService', () => {
  let service: WishdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
