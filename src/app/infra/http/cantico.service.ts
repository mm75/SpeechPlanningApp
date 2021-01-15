import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cantico } from 'src/app/core/domain/entities/cantico';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanticoService extends BaseService<Cantico> {

  constructor(private httpClient: HttpClient, http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/cantico`;
  }

  getBy(value: string): Observable<Cantico[]> {
    return this.httpClient.get<Cantico[]>(`${this.baseUrl}/search/${value}`);
  }
}
