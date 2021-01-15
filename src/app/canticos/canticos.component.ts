import { CanticoService } from '../core/services/cantico.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cantico } from '../shared/models/cantico';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationDialogService } from '../shared/services/confirmation-dialog.service';
import { BaseController } from '../core/services/base.controller';

@Component({
  selector: 'app-canticos',
  templateUrl: './canticos.component.html',
  styleUrls: ['./canticos.component.scss'],
})
export class CanticosComponent extends BaseController<Cantico, new () => Cantico> implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    canticoService: CanticoService,
    modalService: BsModalService,
    confirmationDialogService: ConfirmationDialogService
  ) {
    super(
      canticoService,
      Cantico,
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
      numero: [null, Validators.required],
      titulo: [null, Validators.required],
    });
  }
}
