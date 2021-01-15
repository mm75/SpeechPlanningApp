/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanticoService } from './cantico.service';

describe('Service: Cantico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanticoService]
    });
  });

  it('should ...', inject([CanticoService], (service: CanticoService) => {
    expect(service).toBeTruthy();
  }));
});
