import { TestBed } from '@angular/core/testing';

import { LoadPetsService } from './load-dogs.service';

describe('LoadDogsService', () => {
  let service: LoadPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
