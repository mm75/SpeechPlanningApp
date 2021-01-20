/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticateService } from './authenticate.service';

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticateService]
    });
  });

  it('should ...', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
