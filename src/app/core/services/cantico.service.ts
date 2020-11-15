import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cantico } from 'src/app/shared/models/cantico';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CanticoService extends BaseService<Cantico> {
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/cantico`;
  }
}
