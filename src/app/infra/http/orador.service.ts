import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orador } from 'src/app/core/domain/entities/orador';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OradorService extends BaseService<Orador> {

  constructor(private httpClient: HttpClient, http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/orador`;
  }

  getBy(value: string): Observable<Orador[]> {
    return this.httpClient.get<Orador[]>(`${this.baseUrl}/search/${value}`);
  }
}
