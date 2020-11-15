import { Congregacao } from './../../shared/models/congregacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CongregacaoService extends BaseService<Congregacao> {
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = `${environment.baseUrl}/congregacao`;
  }
}
