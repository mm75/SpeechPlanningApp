import { TestBed } from '@angular/core/testing';

import { EsbocoService } from './esboco.service';

describe('EsbocoService', () => {
  let service: EsbocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsbocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
