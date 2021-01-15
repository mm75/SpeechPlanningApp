import { CanticoService } from '../../../infra/http/cantico.service';
import { EsbocoService } from '../../../infra/http/esboco.service';
import { OradorService } from '../../../infra/http/orador.service';
import { CongregacaoService } from '../../../infra/http/congregacao.service';
import { ProgramacaoService } from '../../../infra/http/programacao.service';
import { Programacao } from '../../../core/domain/entities/programacao';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseController } from '../../base/base.controller';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-programacoes',
  templateUrl: './programacoes.component.html',
  styleUrls: ['./programacoes.component.scss'],
})
export class ProgramacoesComponent
  extends BaseController<Programacao, new () => Programacao>
  implements OnInit {
  public serviceCongregacaoToAutocomplete: CongregacaoService;
  public serviceOradorToAutocomplete: OradorService;
  public serviceEsbocoToAutocomplete: EsbocoService;
  public serviceCanticoToAutocomplete: CanticoService;

  public congregacaoId = 'congregacaoId';
  public congregacaoNome = 'congregacaoNome';
  public congregacaoTitle = 'Congregação';

  public oradorId = 'oradorId';
  public oradorNome = 'oradorNome';
  public oradorTitle = 'Orador';

  public esbocoId = 'esbocoId';
  public esbocoTitulo = 'esbocoTitulo';
  public esbocoTitle = 'Esboço';
  public esbocoValue = 'titulo';

  public canticoId = 'canticoId';
  public canticoTitulo = 'canticoTitulo';
  public canticoTitle = 'Cântico';
  public canticoValue = 'titulo';

  constructor(
    private formBuilder: FormBuilder,
    programacaoService: ProgramacaoService,
    modalService: BsModalService,
    confirmationDialogService: ConfirmationDialogService,
    private congregacaoService: CongregacaoService,
    private oradorService: OradorService,
    private esbocoService: EsbocoService,
    private canticoService: CanticoService
  ) {
    super(
      programacaoService,
      Programacao,
      modalService,
      confirmationDialogService
    );
    this.serviceCongregacaoToAutocomplete = congregacaoService;
    this.serviceOradorToAutocomplete = oradorService;
    this.serviceEsbocoToAutocomplete = esbocoService;
    this.serviceCanticoToAutocomplete = canticoService;
    this.createForm();
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      congregacaoId: [null, Validators.required],
      oradorId: [null, Validators.required],
      esbocoId: [null, Validators.required],
      canticoId: [null],
      data: [null, Validators.required],
      hora: [null],
    });
  }
}
