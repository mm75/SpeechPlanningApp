import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Esboco } from 'src/app/core/domain/entities/esboco';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EsbocoService extends BaseService<Esboco> {

  constructor(private httpClient: HttpClient, http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/esboco`;
  }

  getBy(value: string): Observable<Esboco[]> {
    return this.httpClient.get<Esboco[]>(`${this.baseUrl}/search/${value}`);
  }
}
