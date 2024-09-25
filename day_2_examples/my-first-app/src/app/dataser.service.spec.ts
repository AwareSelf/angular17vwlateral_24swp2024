import { TestBed } from '@angular/core/testing';

import { DataserService } from './dataser.service';

describe('DataserService', () => {
  let service: DataserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
