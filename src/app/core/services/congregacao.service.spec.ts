/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CongregacaoService } from './congregacao.service';

describe('Service: Congregacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CongregacaoService]
    });
  });

  it('should ...', inject([CongregacaoService], (service: CongregacaoService) => {
    expect(service).toBeTruthy();
  }));
});
