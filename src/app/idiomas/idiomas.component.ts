import { IdiomaService } from '../core/services/idioma.service';
import { Idioma } from '../shared/models/Idioma';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationDialogService } from '../shared/services/confirmation-dialog.service';
import { BaseController } from '../core/services/base.controller';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent extends BaseController<Idioma, new () => Idioma> implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    idiomaService: IdiomaService,
    modalService: BsModalService,
    confirmationDialogService: ConfirmationDialogService
  ) {
    super(
      idiomaService,
      Idioma,
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
    });
  }
}
