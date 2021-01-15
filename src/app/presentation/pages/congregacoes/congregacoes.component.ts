import { CongregacaoService } from '../../../infra/http/congregacao.service';
import { Congregacao } from '../../../core/domain/entities/congregacao';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { BaseController } from '../../base/base.controller';

@Component({
  selector: 'app-congregacoes',
  templateUrl: './congregacoes.component.html',
  styleUrls: ['./congregacoes.component.scss'],
})
export class CongregacoesComponent
  extends BaseController<Congregacao, new () => Congregacao>
  implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    congregacoeservice: CongregacaoService,
    modalService: BsModalService,
    confirmationDialogService: ConfirmationDialogService
  ) {
    super(
      congregacoeservice,
      Congregacao,
      modalService,
      confirmationDialogService
    );
    this.createForm();
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      local: [false],
      ativo: [true],
    });
  }
}
