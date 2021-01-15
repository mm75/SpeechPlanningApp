/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OradorService } from './orador.service';

describe('Service: Orador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OradorService]
    });
  });

  it('should ...', inject([OradorService], (service: OradorService) => {
    expect(service).toBeTruthy();
  }));
});
