import { environment } from '../../../environments/environment';
import { Programacao } from '../../core/domain/entities/programacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramacaoService extends BaseService<Programacao> {

  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/programacao`;
  }

  getBy(value: string): Observable<Programacao[]> {
    throw new Error('Method not implemented.');
  }
}
