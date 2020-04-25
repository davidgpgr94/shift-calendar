import { TestBed } from '@angular/core/testing';

import { GlobalizeService } from './globalize.service';

describe('GlobalizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalizeService = TestBed.get(GlobalizeService);
    expect(service).toBeTruthy();
  });
});
