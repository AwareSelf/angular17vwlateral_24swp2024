import { TestBed } from '@angular/core/testing';

import { BooserService } from './booser.service';

describe('BooserService', () => {
  let service: BooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
