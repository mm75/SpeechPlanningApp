import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Idioma } from './../../shared/models/Idioma';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService extends BaseService<Idioma> {
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/idioma`;
  }
}
