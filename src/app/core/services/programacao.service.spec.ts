/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgramacaoService } from './programacao.service';

describe('Service: Programacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramacaoService]
    });
  });

  it('should ...', inject([ProgramacaoService], (service: ProgramacaoService) => {
    expect(service).toBeTruthy();
  }));
});
