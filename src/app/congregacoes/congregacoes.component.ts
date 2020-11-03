import { CongregacaoService } from './../core/services/congregacao.service';
import { Congregacao } from './../shared/models/congregacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congregacoes',
  templateUrl: './congregacoes.component.html',
  styleUrls: ['./congregacoes.component.scss']
})
export class CongregacoesComponent implements OnInit {
  public congregacoes: Congregacao[];

  constructor(private congregacaoService: CongregacaoService) { }

  ngOnInit(): void {
    this.loadCongregacoes();
  }

  loadCongregacoes(): void {
    this.congregacaoService.getAll().subscribe(
      (canticos: Congregacao[]) => {
        this.congregacoes = canticos;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
