import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cantico } from 'src/app/shared/models/cantico';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root',
})
export class CanticoService {
  private baseUrl = `${environment.baseUrl}/cantico`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  getAll(): Observable<Cantico[]> {
    return this.http.get<Cantico[]>(this.baseUrl);
  }

  getById(id: string): Observable<Cantico> {
    return this.http.get<Cantico>(`${this.baseUrl}/${id}`);
  }

  save(cantico: Cantico): Observable<Cantico> {
    if (cantico.id) {
      return this.http.put<Cantico>(this.baseUrl, cantico, this.httpOptions);
    }

    cantico.id = UUID.UUID();

    return this.http.post<Cantico>(this.baseUrl, cantico, this.httpOptions);
  }
}
