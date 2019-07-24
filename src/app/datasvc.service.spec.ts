import { TestBed } from '@angular/core/testing';

import { DatasvcService } from './datasvc.service';

describe('DatasvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasvcService = TestBed.get(DatasvcService);
    expect(service).toBeTruthy();
  });
});
