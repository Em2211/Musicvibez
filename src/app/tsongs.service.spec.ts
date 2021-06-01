import { TestBed } from '@angular/core/testing';

import { TsongsService } from './tsongs.service';

describe('TsongsService', () => {
  let service: TsongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
