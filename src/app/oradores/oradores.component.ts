import { CongregacaoService } from './../core/services/congregacao.service';
import { ConfirmationDialogService } from './../shared/services/confirmation-dialog.service';
import { OradorService } from './../core/services/orador.service';
import { Orador } from './../shared/models/orador';
import { Component, OnInit } from '@angular/core';
import { BaseController } from '../core/services/base.controller';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-oradores',
  templateUrl: './oradores.component.html',
  styleUrls: ['./oradores.component.scss'],
})
export class OradoresComponent
  extends BaseController<Orador, new () => Orador>
  implements OnInit {
  public serviceCongregacaoToAutocomplete: CongregacaoService;
  public congregacaoId = 'congregacaoId';
  public congregacaoNome = 'congregacaoNome';
  public congregacaoTitle = 'Congregação';

  constructor(
    private formBuilder: FormBuilder,
    oradorService: OradorService,
    modalService: BsModalService,
    confirmationDialogService: ConfirmationDialogService,
    private congregacaoService: CongregacaoService,
    ) {
    super(oradorService, Orador, modalService, confirmationDialogService);
    this.serviceCongregacaoToAutocomplete = congregacaoService;
    this.createForm();
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      congregacaoId: [null, Validators.required],
      telefone: [null, Validators.required],
      ativo: [true],
    });
  }
}
