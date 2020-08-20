import { TestBed } from '@angular/core/testing';

import { NewdataService } from './newdata.service';

describe('NewdataService', () => {
  let service: NewdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
