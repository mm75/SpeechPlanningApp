import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Idioma } from '../../core/domain/entities/Idioma';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService extends BaseService<Idioma> {
  constructor(private httpClient: HttpClient, http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/idioma`;
  }

  getBy(value: string): Observable<Idioma[]> {
    return this.httpClient.get<Idioma[]>(`${this.baseUrl}/search/${value}`);
  }
}
