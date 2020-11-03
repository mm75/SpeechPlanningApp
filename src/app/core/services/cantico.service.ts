import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cantico } from 'src/app/shared/models/cantico';

@Injectable({
  providedIn: 'root',
})
export class CanticoService {
  baseUrl = `${environment.baseUrl}/cantico`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cantico[]> {
    return this.http.get<Cantico[]>(this.baseUrl);
  }

  getById(id: string): Observable<Cantico> {
    return this.http.get<Cantico>(`${this.baseUrl}/${id}`);
  }
}
