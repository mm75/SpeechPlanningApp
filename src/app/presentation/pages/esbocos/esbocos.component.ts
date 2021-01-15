import { IdiomaService } from '../../../infra/http/idioma.service';
import { EsbocoService } from '../../../infra/http/esboco.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Esboco } from '../../../core/domain/entities/esboco';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { BaseController } from '../../base/base.controller';

@Component({
  selector: 'app-esbocos',
  templateUrl: './esbocos.component.html',
  styleUrls: ['./esbocos.component.scss'],
})
export class EsbocosComponent extends BaseController<Esboco, new () => Esboco> implements OnInit {
  public idiomaId = 'idiomaId';
  public idiomaNome = 'idiomaNome';
  public idiomaTitle = 'Idioma';
  public serviceToAutocomplete: IdiomaService;

  constructor(
    private formBuilder: FormBuilder,
    esbocoservice: EsbocoService,
    modalService: BsModalService,
    confirmationDialogService: ConfirmationDialogService,
    idiomaService: IdiomaService
  ) {
    super(
      esbocoservice,
      Esboco,
      modalService,
      confirmationDialogService
    );
    this.serviceToAutocomplete = idiomaService;
    this.createForm();
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      numero: [null, Validators.required],
      titulo: [null, Validators.required],
      idiomaId: [null, Validators.required],
    });
  }
}
