import { Congregacao } from './../../shared/models/congregacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongregacaoService {
  baseUrl = `${environment.baseUrl}/congregacao`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Congregacao[]> {
    return this.http.get<Congregacao[]>(this.baseUrl);
  }

  getById(id: string): Observable<Congregacao> {
    return this.http.get<Congregacao>(`${this.baseUrl}/${id}`);
  }
}
