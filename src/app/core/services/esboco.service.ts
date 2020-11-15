import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Esboco } from 'src/app/shared/models/esboco';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class EsbocoService extends BaseService<Esboco> {
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/esboco`;
  }
}
