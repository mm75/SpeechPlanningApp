import { IEntity } from './../entities/ientity';
import { UUID } from 'angular2-uuid';
import { IBaseService } from './ibase.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> implements IBaseService<T> {
  public baseUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  save(entity: IEntity): Observable<T> {
    if (entity.id) {
      return this.http.put<T>(this.baseUrl, entity, this.httpOptions);
    }

    entity.id = UUID.UUID();

    return this.http.post<T>(this.baseUrl, entity, this.httpOptions);
  }

  remove(entity: IEntity): Observable<T> {
    const options = {
      headers: this.httpOptions.headers,
      body: entity
    };

    return this.http.delete<T>(this.baseUrl, options);
  }
}
