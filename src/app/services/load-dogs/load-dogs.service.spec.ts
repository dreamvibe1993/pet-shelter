import { TestBed } from '@angular/core/testing';

import { LoadDogsService } from './load-dogs.service';

describe('LoadDogsService', () => {
  let service: LoadDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
